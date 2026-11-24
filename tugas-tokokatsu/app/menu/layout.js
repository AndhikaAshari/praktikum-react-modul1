export default function MenuLayout({ children }) {
  return (
    <section className="space-y-6">
      <div className="rounded-xl border border-amber-300 bg-amber-50 px-5 py-4">
        <p className="text-sm font-semibold text-stone-900">Info Pemesanan — Pesan sebelum pukul 11.00 WIB agar bisa diambil saat jam makan siang.</p>
        <p className="mt-1 text-xs text-stone-600">Banner ini berasal dari Nested Layout (app/menu/layout.js), sehingga tetap muncul di halaman daftar menu maupun halaman detail menu.</p>
      </div>

      {children}
    </section>
  );
}
