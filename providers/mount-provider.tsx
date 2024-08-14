"use client"

import * as React from "react"


export function MountProvider({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false)


  React.useEffect(() => {
    setMounted(true)
  }, [])


    if (!mounted) {
        return (
        <div>
           Loading....
        </div>
        )
    }
  return children
}
