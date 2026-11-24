import Link from "next/link";

export default function KontakPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Hubungi Kami</h1>
        <p className="mt-2 text-stone-600">Ada pertanyaan soal menu atau ingin pesan dalam jumlah banyak? Hubungi kami lewat informasi di bawah ini.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-amber-200 bg-white p-5">
          <h2 className="font-semibold text-stone-900">Kontak</h2>
          <ul className="mt-2 space-y-1 text-sm text-stone-600">
            <li>WhatsApp: 0812-0000-0000</li>
            <li>Email: halo@katsukita.example</li>
            <li>Instagram: @katsukita</li>
          </ul>
        </div>

        <div className="rounded-xl border border-amber-200 bg-white p-5">
          <h2 className="font-semibold text-stone-900">Lokasi</h2>
          <p className="mt-2 text-sm text-stone-600">Kantin Kampus, Jl. Dr. Setiabudi No.193, Gegerkalong, Kec. Sukasari, Kota Bandung, Jawa Barat 40153.</p>
        </div>
      </div>

      <Link href="/menu" className="inline-block rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700">
        Pesan Sekarang
      </Link>
    </div>
  );
}
