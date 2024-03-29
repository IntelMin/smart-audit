import type { Metadata } from "next";
import { gilroy } from "@/fonts/gilroy";
import "./globals.css";
import { Providers } from "@/components/wallet-provider";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  metadataBase: new URL("https://bounty.smartaudit.app"),
  title: "SmartAudit Dapp",
  description: "Handle auditing smartly",
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#000] ${gilroy.className}`}>
        <Providers>
          <Navbar />
          <Toaster />
          {children}
          <Toaster/>
        </Providers>
      </body>
    </html>
  );
}
