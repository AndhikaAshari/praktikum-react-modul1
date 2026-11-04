// src/App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Kartu from "./Kartu";
import Penghitung from "./Penghitung";
import FormTugas from "./FormTugas";
import ItemTugas from "./ItemTugas";

function App() {
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem("daftar-tugas");
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }
    return [
      { id: 1, judul: "Install Node.js dan Vite", selesai: true },
      { id: 2, judul: "Pelajari useState", selesai: false },
    ];
  });

  // TUGAS 1: state baru untuk pilihan filter
  const [filter, setFilter] = useState("semua");

  useEffect(() => {
    console.log("Aplikasi Daftar Tugas siap digunakan!");
  }, []);

  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
    document.title = `(${sisa}) Tugas Belum Selesai`;
  }, [daftarTugas]);

  useEffect(() => {
    localStorage.setItem("daftar-tugas", JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  const tambahTugas = (judul) => {
    const tugasBaru = { id: Date.now(), judul: judul, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  const ubahStatus = (id) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai };
      }
      return tugas;
    });
    setDaftarTugas(daftarBaru);
  };

  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  // TUGAS 2: hapus semua tugas yang berstatus selesai
  const hapusSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  // TUGAS 1: nilai turunan, .filter() dijalankan sebelum .map()
  const tugasTampil = daftarTugas.filter((tugas) => {
    if (filter === "selesai") return tugas.selesai;
    if (filter === "belum") return !tugas.selesai;
    return true; // 'semua'
  });

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>
      <p className="subjudul">Laboratorium Informatika - Modul 2: React Lanjutan</p>

      <Penghitung />

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>

        {/* TUGAS 1: tiga tombol filter dengan className dinamis */}
        <div className="filter">
          <button className={filter === "semua" ? "tombol tombol-kecil tombol-filter aktif" : "tombol tombol-kecil tombol-filter"} onClick={() => setFilter("semua")}>
            Semua
          </button>
          <button className={filter === "belum" ? "tombol tombol-kecil tombol-filter aktif" : "tombol tombol-kecil tombol-filter"} onClick={() => setFilter("belum")}>
            Belum Selesai
          </button>
          <button className={filter === "selesai" ? "tombol tombol-kecil tombol-filter aktif" : "tombol tombol-kecil tombol-filter"} onClick={() => setFilter("selesai")}>
            Selesai
          </button>
        </div>

        {tugasTampil.length === 0 ? (
          <p className="kosong">{daftarTugas.length === 0 ? "Belum ada tugas. Yuk tambahkan tugas pertamamu!" : "Tidak ada tugas pada filter ini."}</p>
        ) : (
          <ul className="daftar">
            {tugasTampil.map((tugas) => (
              <ItemTugas key={tugas.id} tugas={tugas} onUbahStatus={ubahStatus} onHapus={hapusTugas} />
            ))}
          </ul>
        )}

        {/* TUGAS 2: conditional rendering dengan && */}
        {jumlahSelesai > 0 && (
          <div className="aksi-bawah">
            <button className="tombol tombol-merah tombol-kecil" onClick={hapusSelesai}>
              Hapus Semua yang Selesai
            </button>
          </div>
        )}
      </Kartu>
    </div>
  );
}

export default App;
