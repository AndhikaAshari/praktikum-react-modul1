import { useState } from "react";

function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState("");
  const [nominal, setNominal] = useState("");
  const [jenis, setJenis] = useState("pemasukan");

  // Input selalu berupa teks, jadi diubah ke angka dengan Number()
  const angka = Number(nominal);
  const tidakValid = keterangan.trim() === "" || nominal === "" || angka <= 0;

  const tanganiKirim = (event) => {
    event.preventDefault();
    if (tidakValid) return;
    onTambah({ keterangan: keterangan.trim(), nominal: angka, jenis: jenis });
    setKeterangan("");
    setNominal("");
    setJenis("pemasukan");
  };

  return (
    <form className="form" onSubmit={tanganiKirim}>
      <input className="input" type="text" placeholder="Keterangan (contoh: Uang saku)" value={keterangan} onChange={(event) => setKeterangan(event.target.value)} />
      <div className="baris">
        <input className="input" type="number" placeholder="Nominal" value={nominal} onChange={(event) => setNominal(event.target.value)} />
        <select className="input" value={jenis} onChange={(event) => setJenis(event.target.value)}>
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
      </div>
      {nominal !== "" && angka <= 0 && <p className="galat">Nominal harus lebih dari 0.</p>}
      <button className="tombol" type="submit" disabled={tidakValid}>
        Tambah Transaksi
      </button>
    </form>
  );
}

export default FormTransaksi;
