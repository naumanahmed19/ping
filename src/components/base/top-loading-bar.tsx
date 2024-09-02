"use client";

import NextTopLoader from "nextjs-toploader";
import React, { useEffect, useState } from "react";

export default function TopLoadingBar({ theme }: { theme: string }) {
  const [primaryColor, setPrimaryColor] = useState<string>("");

  useEffect(() => {
    // Create a temporary element to get the Tailwind CSS primary color
    const tempElement = document.createElement("div");
    tempElement.className = "bg-primary";
    document.body.appendChild(tempElement);
    const rootStyles = getComputedStyle(tempElement);
    const color = rootStyles.backgroundColor;
    document.body.removeChild(tempElement);
    setPrimaryColor(color);
  }, [theme]);
  return (
    <NextTopLoader
      color={primaryColor}
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true} // Enable the spinner
      easing="ease"
      speed={200}
      shadow={`0 0 10px ${primaryColor}, 0 0 5px ${primaryColor}`}
    />
  );
}
