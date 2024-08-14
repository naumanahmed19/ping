'use client';
import { useTheme } from "next-themes";


export function LoadingBar({ children, className,isFullWidth  }: IBaseWrapperProps) {
    const { theme, setTheme } = useTheme()


    return (
      <div className="absolute top-50 left-50 z-10">

The current theme is: {theme}
      </div>
       
    )
}
