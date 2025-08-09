import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomTitleBar from "@/components/CustomTitleBar";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Indoor Studio",
  description:
    "Indoor Studio is a Next.js application template for building modern web applications.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased `}>
        <CustomTitleBar />
        {children}
      </body>
    </html>
  );
}
