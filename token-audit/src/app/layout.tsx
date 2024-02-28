import type { Metadata } from "next";
import { gilroy } from "@/fonts/gilroy";
import "./globals.css";
import { Providers } from "@/components/wallet-provider";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Create Next App",
  description: "Generated by create next app",
=======
  title: "SmartAudit Dapp",
  description: "Handle auditing smartly",
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d
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
<<<<<<< HEAD
          <Toaster />
=======
>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d
          {children}
          <Toaster/>
        </Providers>
      </body>
    </html>
  );
}
