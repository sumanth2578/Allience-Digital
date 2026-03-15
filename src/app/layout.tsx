import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import AmbientBackground from "@/components/AmbientBackground";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Allience Digital | Premier Digital Marketing Agency",
  description: "Elevate your brand with Allience Digital. We provide cutting-edge digital marketing solutions to help you grow.",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        <AmbientBackground />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
