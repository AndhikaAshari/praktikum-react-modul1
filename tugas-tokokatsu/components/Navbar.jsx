"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const daftarLink = [
  { href: "/", label: "Beranda" },
  { href: "/menu", label: "Menu" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-amber-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-stone-900">
          🍗 Katsu Kita
        </Link>

        <ul className="flex items-center gap-2">
          {daftarLink.map((item) => {
            const aktif = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link href={item.href} className={`rounded-lg px-3 py-2 text-sm font-medium transition ${aktif ? "bg-amber-600 text-white" : "text-stone-600 hover:bg-amber-100 hover:text-stone-900"}`}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
