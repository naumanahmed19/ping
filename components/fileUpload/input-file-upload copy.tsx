'use client';
import React, { useState } from "react";
import { FileIcon } from "lucide-react"; // Assuming you are using lucide-react icons

const InputFileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Preview setup for images, videos, and audio
      const fileType = selectedFile.type.split("/")[0];
      if (fileType === "image" || fileType === "video" || fileType === "audio") {
        const url = URL.createObjectURL(selectedFile);
        setPreview(url);
      } else if (selectedFile.type === "application/pdf") {
        // PDFs are displayed as URLs
        const url = URL.createObjectURL(selectedFile);
        setPreview(url);
      } else {
        setPreview(null);
      }
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div>
      <div
        className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center cursor-pointer"
        onClick={triggerFileInput}
      >
        <FileIcon className="w-12 h-12" />
        <span className="text-sm font-medium text-gray-500">Drag and drop a file or click to browse</span>
        <span className="text-xs text-gray-500">PDF, image, video, or audio</span>
      </div>
      
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />

      {file && (
        <div className="mt-4">
          <p className="text-sm font-medium">Selected File: {file.name}</p>
          {preview && (
            <div className="mt-2">
              {file.type.startsWith("image/") && <img src={preview} alt="Preview" className="w-40 h-40 object-cover" />}
              {file.type.startsWith("video/") && (
                <video controls className="w-40 h-40">
                  <source src={preview} type={file.type} />
                  Your browser does not support the video tag.
                </video>
              )}
              {file.type.startsWith("audio/") && (
                <audio controls>
                  <source src={preview} type={file.type} />
                  Your browser does not support the audio element.
                </audio>
              )}
              {file.type === "application/pdf" && (
                <iframe
                  src={preview}
                  title="PDF Preview"
                  className="w-full h-64"
                  frameBorder="0"
                ></iframe>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputFileUpload;