"use client"

import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  themeConfig: {
    theme: string;
    radius?: string;
    // Add other properties as needed
  };
}

export function ThemeWrapper({
  themeConfig,
  children,
  className,
}: ThemeWrapperProps) {
  const [config] = useConfig()
  

 
  return (
    <div
      className={cn(
        `theme-${themeConfig?.theme}`,
        "w-full",
        className
      )}
      style={
        {
          "--radius": `${parseFloat(themeConfig?.radius) || 0.5 }rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}