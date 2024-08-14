"use client"

import * as React from "react"
import { useSelectedLayoutSegment } from "next/navigation"

import { useConfig } from "@/hooks/use-config"

export function ThemeSwitcher() {
  const [config] = useConfig()
  const segment = useSelectedLayoutSegment()

  React.useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className)
      }
    })

    console.log(config,'adding theme.',segment)

    const theme = config.theme
    if (config.theme) {
    
      return document.body.classList.add(`theme-${theme}`)
    }
  }, [segment, config])

  return null
}
