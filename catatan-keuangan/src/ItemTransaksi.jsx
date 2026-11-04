function ItemTransaksi({ transaksi, onHapus }) {
  const masuk = transaksi.jenis === "pemasukan";

  return (
    <li className="item">
      <span className="ket">{transaksi.keterangan}</span>
      <span className={masuk ? "pemasukan" : "pengeluaran"}>
        {masuk ? "+" : "-"} Rp {transaksi.nominal.toLocaleString("id-ID")}
      </span>
      <button className="tombol tombol-merah tombol-kecil" onClick={() => onHapus(transaksi.id)}>
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;
