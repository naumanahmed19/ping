import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  communityId: z.number({
    required_error: "Please select a community.",
  }),

  title: z.string().min(10, {
    message: "Title must be at least 10 characters.",
  }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(1, "Description is required"),
});
