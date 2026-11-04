// src/App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Kartu from "./Kartu";
import RingkasanSaldo from "./RingkasanSaldo";
import FormTransaksi from "./FormTransaksi";
import ItemTransaksi from "./ItemTransaksi";

function App() {
  // State utama: baca dari localStorage, jika kosong mulai dari array kosong
  const [daftarTransaksi, setDaftarTransaksi] = useState(() => {
    const dataTersimpan = localStorage.getItem("catatan-keuangan");
    return dataTersimpan ? JSON.parse(dataTersimpan) : [];
  });

  // Simpan ke localStorage setiap daftarTransaksi berubah
  useEffect(() => {
    localStorage.setItem("catatan-keuangan", JSON.stringify(daftarTransaksi));
  }, [daftarTransaksi]);

  const tambahTransaksi = (data) => {
    const transaksiBaru = { id: Date.now(), ...data };
    setDaftarTransaksi([...daftarTransaksi, transaksiBaru]);
  };

  const hapusTransaksi = (id) => {
    setDaftarTransaksi(daftarTransaksi.filter((t) => t.id !== id));
  };

  // Nilai turunan: saldo dihitung dari state, bukan state baru
  const saldo = daftarTransaksi.reduce((total, t) => {
    return t.jenis === "pemasukan" ? total + t.nominal : total - t.nominal;
  }, 0);

  return (
    <div className="wadah">
      <h1 className="judul">Catatan Keuangan Mini</h1>
      <p className="subjudul">Praktikum Web - Modul 2: Tugas 3</p>

      <RingkasanSaldo saldo={saldo} />

      <Kartu judul="Tambah Transaksi">
        <FormTransaksi onTambah={tambahTransaksi} />
      </Kartu>

      <Kartu judul="Daftar Transaksi">
        {daftarTransaksi.length === 0 ? (
          <p className="kosong">Belum ada transaksi. Yuk catat transaksi pertamamu!</p>
        ) : (
          <ul className="daftar">
            {daftarTransaksi.map((t) => (
              <ItemTransaksi key={t.id} transaksi={t} onHapus={hapusTransaksi} />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default App;
