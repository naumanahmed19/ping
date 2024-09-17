import { db } from "@/db/db";
import { media } from "@/db/schema";
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "./use-auth";
// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

async function uploadToS3(file: Buffer, key: string): Promise<string> {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET || "", // Provide a default value if AWS_S3_BUCKET is undefined
    Key: key,
    Body: file,
    ContentType: "image/jpeg", // Adjust based on your file type
  };

  return new Promise((resolve, reject) => {
    s3.upload(
      params,
      (err: Error | null, data: AWS.S3.ManagedUpload.SendData) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Location);
        }
      },
    );
  });
}

export async function uploadIcon(data: {
  resourceId: string;
  resourceType: string;
  file: string;
  type: string;
}) {
  const key = uuidv4();
  if (data && data.file && data.file) {
    const fileBuffer = Buffer.from(data.file, "base64"); // Assuming the image is base64 encoded

    try {
      const s3Url = await uploadToS3(fileBuffer, key);

      const { user } = await useAuth();

      if (!user) return;

      await db
        .insert(media)
        .values({
          userId: user?.id,
          resourceId: data.resourceId,
          resourceType: data.resourceType,
          url: s3Url,
          key: key,
          mimeType: "image/jpeg",
          size: fileBuffer.length,
          type: data.type,
        })
        .returning();

      console.log({
        message: "Image uploaded and saved to media successfully",
        url: s3Url,
      });
    } catch (error) {
      console.error("Error uploading image to S3:", error);
    }
  } else {
  }
}
