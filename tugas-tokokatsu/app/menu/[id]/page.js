import Link from "next/link";
import { notFound } from "next/navigation";
import { daftarMenu } from "@/data/menu";
import TombolPesan from "@/components/TombolPesan";

export function generateStaticParams() {
  return daftarMenu.map((menu) => ({ id: menu.id }));
}

export default async function DetailMenuPage({ params }) {
  const { id } = await params;
  const menu = daftarMenu.find((item) => item.id === id);

  if (!menu) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link href="/menu" className="inline-block text-sm font-medium text-stone-700 hover:underline">
        &larr; Kembali ke Daftar Menu
      </Link>

      <article className="rounded-2xl border border-amber-200 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-amber-100 text-4xl">{menu.ikon}</div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-800">{menu.kategori}</span>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${menu.tersedia ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>{menu.tersedia ? "Tersedia" : "Habis"}</span>
            </div>
            <h1 className="mt-2 text-2xl font-bold text-stone-900">{menu.nama}</h1>
            <p className="mt-1 text-lg font-semibold text-amber-700">Rp{menu.harga.toLocaleString("id-ID")}</p>
          </div>
        </div>

        <p className="mt-6 leading-relaxed text-stone-700">{menu.deskripsi}</p>

        <div className="mt-6 border-t border-stone-100 pt-6">
          <TombolPesan nama={menu.nama} harga={menu.harga} tersedia={menu.tersedia} />
        </div>
      </article>
    </div>
  );
}
