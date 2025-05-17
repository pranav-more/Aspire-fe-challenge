import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aspire - Card Management",
  description: "Aspire application for debit card management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-gray-800">{children}</body>
    </html>
  );
}
