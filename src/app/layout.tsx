import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "News Portal",
  description: "Stay updated with the latest headlines around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-gray-900 antialiased font-sans`}
      >
        <header className="w-full py-4 px-6 shadow-sm bg-indigo-500 text-white">
          <div className="max-w-6xl mx-auto text-center md:text-left">
            <h1 className="text-2xl font-semibold tracking-tight">📰 News Portal</h1>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>

        <footer className="w-full py-4 px-6 mt-12 text-center text-sm text-gray-500 border-t">
          © {new Date().getFullYear()} News Portal. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
