"use client"
import '@rainbow-me/rainbowkit/styles.css';
import React, { useState, useEffect } from "react"
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit"
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { mainnet, sepolia, Chain } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"

const c: Chain[] = [process.env.NODE_ENV === "production" ? mainnet : sepolia]

const { chains, publicClient, webSocketPublicClient } = configureChains(c, [
  publicProvider(),
])

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? ""

const { wallets } = getDefaultWallets({
  appName: "RainbowKit demo",
  projectId,
  chains,
})

const demoAppInfo = {
  appName: "Rainbowkit Demo",
}

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={demoAppInfo}
        theme={darkTheme({
          accentColor: "#F44336",
          accentColorForeground: "white",
          borderRadius: "large",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}