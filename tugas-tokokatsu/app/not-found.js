import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-white p-10 text-center">
      <p className="text-4xl font-bold text-stone-900">404</p>
      <h1 className="mt-3 text-xl font-bold text-stone-900">Halaman atau Menu Tidak Ditemukan</h1>
      <p className="mt-2 text-sm text-stone-600">Maaf, alamat yang kamu buka tidak tersedia atau menu yang dicari tidak ada di daftar Katsu Kita.</p>
      <Link href="/menu" className="mt-6 inline-block rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700">
        Kembali ke Daftar Menu
      </Link>
    </div>
  );
}
