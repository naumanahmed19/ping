"use client";

import { useConfig } from "@/hooks/use-config";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  themeConfig?: {
    radius?: string;
  };
}

export function ThemeWrapper({ themeConfig, children }: ThemeWrapperProps) {
  const [config] = useConfig();

  return (
    <div
      style={
        {
          "--radius": `${parseFloat(themeConfig?.radius ?? "0") || config.radius || 0.5}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
