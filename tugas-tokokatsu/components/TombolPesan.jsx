"use client";

import { useState } from "react";

export default function TombolPesan({ nama, harga, tersedia }) {
  const [jumlah, setJumlah] = useState(1);
  const [dipesan, setDipesan] = useState(false);

  const total = harga * jumlah;

  function kurangi() {
    if (jumlah > 1) {
      setJumlah(jumlah - 1);
      setDipesan(false);
    }
  }

  function tambah() {
    setJumlah(jumlah + 1);
    setDipesan(false);
  }

  if (!tersedia) {
    return <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">Maaf, menu ini sedang habis dan belum bisa dipesan.</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-stone-700">Jumlah porsi:</span>
        <button type="button" onClick={kurangi} className="h-9 w-9 cursor-pointer rounded-lg border border-stone-300 text-lg font-semibold text-stone-700 transition hover:bg-stone-100">
          -
        </button>
        <span className="w-6 text-center font-semibold text-stone-900">{jumlah}</span>
        <button type="button" onClick={tambah} className="h-9 w-9 cursor-pointer rounded-lg border border-stone-300 text-lg font-semibold text-stone-700 transition hover:bg-stone-100">
          +
        </button>
      </div>

      <p className="text-sm text-stone-600">
        Total: <strong className="text-amber-700">Rp{total.toLocaleString("id-ID")}</strong>
      </p>

      <button
        type="button"
        onClick={() => setDipesan(true)}
        className={`cursor-pointer rounded-lg px-5 py-2.5 text-sm font-semibold transition ${dipesan ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-amber-600 text-white hover:bg-amber-700"}`}
      >
        {dipesan ? "✓ Pesanan Dicatat" : "Pesan Sekarang"}
      </button>

      {dipesan && (
        <p className="text-sm text-emerald-700">
          {jumlah} porsi {nama} sudah dicatat. Silakan ambil di kasir.
        </p>
      )}
    </div>
  );
}
