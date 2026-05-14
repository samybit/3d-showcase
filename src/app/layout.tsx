// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3D Dimensions Unleashed",
  description: "Exploring Framer Motion, Three.js, and Spline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="black">
      <body className={inter.className}>{children}</body>
    </html>
  );
}