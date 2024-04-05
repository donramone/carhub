import { Footer, NavBar } from "@/components";
import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Rent a Car",
  description: "Discovered the best car ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
