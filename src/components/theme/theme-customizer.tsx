"use client";

import { CheckIcon, MoonIcon, ResetIcon, SunIcon } from "@radix-ui/react-icons";
import { Palette } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/utils";
// import { copyToClipboardWithMeta } from "@/components/copy-button"
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { themes } from "@/styles/themes";

import { setCookie } from "@/actions/theme-config";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/styles/mdx.css";

export function ThemeCustomizer() {
  const [config, setConfig] = useConfig();
  const { resolvedTheme: mode } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <TooltipProvider>
      <div className="flex items-center gap-2">
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Palette width={20} height={20} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="p-6 pt-0">
            <Customizer />
          </DrawerContent>
        </Drawer>
        <div className="hidden items-center md:flex">
          <Popover modal={true}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <Palette width={20} height={20} />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="z-40 w-[340px] rounded-[12px] bg-white p-6 dark:bg-zinc-950"
            >
              <Customizer />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </TooltipProvider>
  );
}

function Customizer() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme: setMode, resolvedTheme: mode } = useTheme();
  const [config, setConfig] = useConfig();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChangeClick = async (theme: any) => {
    setConfig({
      ...config,
      theme: theme.name,
    });
    await setCookie("theme", theme.name);
  };

  return (
    <div>
      <div className="flex items-start pt-4 md:pt-0">
        <div className="space-y-1 pr-2">
          <div className="font-semibold leading-none tracking-tight">
            Customize
          </div>
          <div className="text-xs text-muted-foreground">
            Pick a style and color for your components.
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto rounded-[0.5rem]"
          onClick={async () => {
            setConfig({
              ...config,
              theme: "zinc",
              radius: 0.5,
            });
            await setCookie("theme", "zinc");
            await setCookie("radius", "0.5");
          }}
        >
          <ResetIcon />
          <span className="sr-only">Reset</span>
        </Button>
      </div>
      <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
        <div className="space-y-1.5">
          {/* <div className="grid grid-cols-3 gap-2">
            <Button
              variant={"outline"}
              size="sm"
              onClick={() => setConfig({ ...config, style: "default" })}
              className={cn(
                config.style === "default" && "border-2 border-primary"
              )}
            >
              Default zz
            </Button>
            <Button
              variant={"outline"}
              size="sm"
              onClick={() => setConfig({ ...config, style: "new-york" })}
              className={cn(
                config.style === "new-york" && "border-2 border-primary"
              )}
            >
              New York
            </Button>
          </div> */}
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Color</Label>
          <div className="grid grid-cols-3 gap-2">
            {themes.map((theme) => {
              const isActive = config.theme === theme.name;

              return mounted ? (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={theme.name}
                  onClick={() => handleThemeChangeClick(theme)}
                  className={cn(
                    "justify-start",
                    isActive && "border-2 border-primary",
                  )}
                  style={
                    {
                      "--theme-primary": `hsl(${
                        theme?.activeColor[mode === "dark" ? "dark" : "light"]
                      })`,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className={cn(
                      "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]",
                    )}
                  >
                    {isActive && <CheckIcon className="h-4 w-4 text-white" />}
                  </span>
                  {theme.label}
                </Button>
              ) : (
                <Skeleton className="h-8 w-full" key={theme.name} />
              );
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Radius</Label>
          <div className="grid grid-cols-5 gap-2">
            {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
              return (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={value}
                  onClick={async () => {
                    setConfig({
                      ...config,
                      radius: parseFloat(value),
                    });
                    await setCookie("radius", value);
                  }}
                  className={cn(
                    config.radius === parseFloat(value) &&
                      "border-2 border-primary",
                  )}
                >
                  {value}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Mode</Label>
          <div className="grid grid-cols-3 gap-2">
            {mounted ? (
              <>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => setMode("light")}
                  className={cn(mode === "light" && "border-2 border-primary")}
                >
                  <SunIcon className="mr-1 -translate-x-1" />
                  Light
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => setMode("dark")}
                  className={cn(mode === "dark" && "border-2 border-primary")}
                >
                  <MoonIcon className="mr-1 -translate-x-1" />
                  Dark
                </Button>
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
