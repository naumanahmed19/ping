"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react"; // Assuming you are using lucide-react icons
import React from "react";

const InputFileUpload = ({ ...props }) => {
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        props.onChange(result);
      };
      reader.readAsDataURL(file);
    }
  }

  const triggerFileInput = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById(props.name)?.click();
  };

  return (
    <div>
      <div
        className="flex border-2 border-dashed border-gray-200 rounded-lg  gap-1 p-4 items-center cursor-pointer"
        onClick={triggerFileInput}
      >
        <Avatar className="mr-2">
          <AvatarImage src={props.value} />
          <AvatarFallback className="bg-transparent">
            <Image className="w-6 h-6" />
          </AvatarFallback>
        </Avatar>

        <span className="text-sm font-medium text-gray-500">
          {props.placeholder || "Upload File"}
        </span>

        <Button
          className="ml-auto"
          variant="outline"
          onClick={triggerFileInput}
        >
          {props.buttonText || "Upload"}
        </Button>
      </div>

      <input
        name={props.name}
        id={props.name}
        accept={props.accept}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default InputFileUpload;
