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
  title: "Alliance Digital | Growth Marketing Agency",
  description: "Alliance Digital helps brands grow through cinematic storytelling and elite digital marketing strategy.",
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
