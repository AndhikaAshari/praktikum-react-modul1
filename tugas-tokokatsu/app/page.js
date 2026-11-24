import Link from "next/link";
import { daftarMenu } from "@/data/menu";

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

export default function HomePage() {
  const menuAndalan = daftarMenu.slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-stone-900 p-8 text-white shadow-sm">
        <span className="inline-block rounded-full bg-amber-600 px-3 py-1 text-xs font-medium text-white">Warung Katsu Kampus</span>
        <h1 className="mt-4 text-3xl font-bold leading-tight">Selamat Datang di Katsu Kita</h1>
        <p className="mt-3 max-w-xl text-stone-300">Katsu renyah dengan harga ramah kantong mahasiswa. Lihat menu, cek ketersediaannya, lalu pesan sebelum jam makan siang.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/menu" className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-900 transition hover:bg-amber-400">
            Lihat Menu
          </Link>
          <Link href="/tentang" className="rounded-lg border border-stone-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-800">
            Tentang Kami
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-stone-900">Menu Andalan</h2>
          <Link href="/menu" className="text-sm font-medium text-stone-700 hover:underline">
            Semua Menu &rarr;
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {menuAndalan.map((menu) => (
            <Link key={menu.id} href={`/menu/${menu.id}`} className="rounded-xl border border-amber-200 bg-white p-5 transition hover:border-amber-400 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-2xl">{menu.ikon}</div>
              <h3 className="mt-4 font-semibold text-stone-900">{menu.nama}</h3>
              <p className="mt-1 text-sm font-medium text-amber-700">{formatRupiah(menu.harga)}</p>
              <span className="mt-3 inline-block rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-700">{menu.kategori}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
