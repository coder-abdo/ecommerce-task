import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const figTree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop|Best Shop",
  description: "An Ecommerce Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figTree.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
