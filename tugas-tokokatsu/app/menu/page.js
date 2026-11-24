import Link from "next/link";
import { daftarMenu } from "@/data/menu";

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

export default function DaftarMenuPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-stone-900">Daftar Menu</h1>
      <p className="mt-1 text-sm text-stone-600">Pilih salah satu menu di bawah untuk melihat deskripsi dan memesan.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {daftarMenu.map((menu) => (
          <div key={menu.id} className="flex flex-col justify-between rounded-xl border border-amber-200 bg-white p-5 transition hover:border-amber-400">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-100 text-2xl">{menu.ikon}</span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${menu.tersedia ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>{menu.tersedia ? "Tersedia" : "Habis"}</span>
              </div>

              <h2 className="mt-4 text-lg font-semibold text-stone-900">{menu.nama}</h2>
              <p className="mt-0.5 text-sm font-medium text-amber-700">{formatRupiah(menu.harga)}</p>
              <p className="mt-2 line-clamp-2 text-sm text-stone-600">{menu.deskripsi}</p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
              <span className="text-xs font-medium text-stone-500">{menu.kategori}</span>
              <Link href={`/menu/${menu.id}`} className="rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-amber-700">
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
