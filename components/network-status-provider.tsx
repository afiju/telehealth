"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface NetworkStatusContextType {
  isOnline: boolean
}

const NetworkStatusContext = createContext<NetworkStatusContextType>({
  isOnline: true,
})

export function useNetworkStatus() {
  return useContext(NetworkStatusContext)
}

export function NetworkStatusProvider({ children }: { children: React.ReactNode }) {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine)
    }

    window.addEventListener("online", updateOnlineStatus)
    window.addEventListener("offline", updateOnlineStatus)

    return () => {
      window.removeEventListener("online", updateOnlineStatus)
      window.removeEventListener("offline", updateOnlineStatus)
    }
  }, [])

  return <NetworkStatusContext.Provider value={{ isOnline }}>{children}</NetworkStatusContext.Provider>
}
