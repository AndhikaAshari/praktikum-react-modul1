import Link from "next/link";

export default function TentangPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Tentang Katsu Kita</h1>
        <p className="mt-2 text-stone-600">Katsu Kita adalah warung katsu sederhana di lingkungan kampus yang menyajikan katsu ayam dan udang dengan tepung panko renyah, bumbu rumahan, dan porsi yang pas untuk mahasiswa.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-amber-200 bg-white p-5">
          <h2 className="font-semibold text-stone-900">Jam Buka</h2>
          <ul className="mt-2 space-y-1 text-sm text-stone-600">
            <li>Senin - Jumat: 10.00 - 20.00 WIB</li>
            <li>Sabtu: 10.00 - 17.00 WIB</li>
            <li>Minggu: Tutup</li>
          </ul>
        </div>

        <div className="rounded-xl border border-amber-200 bg-white p-5">
          <h2 className="font-semibold text-stone-900">Komitmen Kami</h2>
          <p className="mt-2 text-sm text-stone-600">Bahan segar setiap hari, digoreng saat dipesan, dan harga tetap terjangkau untuk kantong mahasiswa.</p>
        </div>
      </div>

      <Link href="/menu" className="inline-block rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700">
        Lihat Menu
      </Link>
    </div>
  );
}
