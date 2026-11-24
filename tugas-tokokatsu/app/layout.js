import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Katsu Kita — Warung Katsu Kampus",
  description: "Katalog menu warung katsu menggunakan Next.js 16 dan App Router.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${geistSans.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-8">{children}</main>
        <footer className="border-t border-amber-200 bg-white py-5 text-center text-sm text-stone-500">Katsu Kita &copy; 2026 — Tugas Terstruktur Praktikum Pemrograman Web</footer>
      </body>
    </html>
  );
}
