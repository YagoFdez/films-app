import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dotfilms",
  description: "Rate your favorite films",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
        <main className="min-h-screen bg-gray-100">
          <div className="container mx-auto px-4 py-8">
          {children}
        </div>
        </main>
      </body>
    </html>
  );
}
