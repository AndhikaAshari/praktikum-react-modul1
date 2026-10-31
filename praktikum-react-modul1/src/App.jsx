// src/App.jsx
import React from "react";
import KartuProfil from "./KartuProfil";
import BadgeSkill from "./BadgeSkill";
import ItemMatkul from "./ItemMatkul";
import KartuProyek from "./KartuProyek";

function App() {
  const daftarPraktikum = [
    { id: 101, kode: "IF211", nama: "Pemrograman Web (React & Laravel)", sks: 3, hari: "Senin" },
    { id: 102, kode: "IF212", nama: "Sistem Basis Data (PostgreSQL)", sks: 3, hari: "Rabu" },
    { id: 103, kode: "IF213", nama: "Rekayasa Perangkat Lunak Terapan", sks: 3, hari: "Kamis" },
    { id: 104, kode: "IF214", nama: "Arsitektur Sistem Terdistribusi", sks: 2, hari: "Jumat" },
  ];

  const daftarSkill = [
    { id: 1, namaSkill: "HTML & CSS", level: "Mahir" },
    { id: 2, namaSkill: "JavaScript", level: "Menengah" },
    { id: 3, namaSkill: "React JS", level: "Pemula" },
  ];

  const daftarProyek = [
    {
      id: 1,
      judul: "Aplikasi Daftar Tugas",
      deskripsi: "Aplikasi untuk mencatat dan memantau tugas harian dengan tampilan sederhana.",
      teknologi: ["React", "JavaScript", "CSS"],
      repoUrl: "https://github.com/AndhikaAshari/daftar-tugas",
    },
    {
      id: 2,
      judul: "Website Profil Kampus",
      deskripsi: "Halaman statis berisi informasi program studi, fasilitas, dan kontak kampus.",
      teknologi: ["HTML", "CSS", "Bootstrap"],
      repoUrl: "https://github.com/AndhikaAshari/profil-kampus",
    },
    {
      id: 3,
      judul: "Katalog Buku Perpustakaan",
      deskripsi: "Sistem pencarian dan pengelolaan katalog buku dengan basis data relasional.",
      teknologi: ["Laravel", "PostgreSQL", "PHP"],
      repoUrl: "https://github.com/AndhikaAshari/katalog-buku",
    },
    {
      id: 4,
      judul: "Kalkulator Keuangan Mini",
      deskripsi: "Alat hitung sederhana untuk mencatat pemasukan dan pengeluaran bulanan.",
      teknologi: ["React", "Vite"],
      repoUrl: "https://github.com/AndhikaAshari/kalkulator-keuangan",
    },
  ];

  const notifikasiSapaan = () => {
    alert("Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.");
  };

  const judulSeksi = {
    fontSize: "22px",
    fontWeight: 700,
    letterSpacing: "-0.01em",
    margin: "0 0 16px 4px",
  };

  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 64px" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: 700, letterSpacing: "-0.03em", margin: "0 0 8px 0" }}>Praktikum Pemrograman Web</h1>
        <p style={{ color: "#6e6e73", fontSize: "16px", margin: 0 }}>Laboratorium Informatika · Modul 1: Pengenalan React JS & Vite</p>
      </header>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={judulSeksi}>Profil Mahasiswa Praktikan</h2>
        <KartuProfil nama="Andhika Ashari" npm="243040034" kelas="IF - Praktikum" status="Aktif" fotoUrl="https://via.placeholder.com/80" />
        <div>
          {daftarSkill.map((skill) => (
            <BadgeSkill key={skill.id} namaSkill={skill.namaSkill} level={skill.level} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={judulSeksi}>Daftar Rencana Praktikum Semester</h2>
        <div style={{ display: "grid", gap: "12px" }}>
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={judulSeksi}>Showcase Portofolio Mini</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          {daftarProyek.map((proyek) => (
            <KartuProyek key={proyek.id} {...proyek} />
          ))}
        </div>
      </section>

      <div style={{ textAlign: "center" }}>
        <button className="tombol-apple" onClick={notifikasiSapaan}>
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>
    </div>
  );
}

export default App;
