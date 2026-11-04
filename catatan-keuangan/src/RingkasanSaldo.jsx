import Kartu from "./Kartu";

function RingkasanSaldo({ saldo }) {
  return (
    <Kartu judul="Total Saldo">
      <p className="saldo-label">Dihitung otomatis dari semua transaksi</p>
      <p className={saldo >= 0 ? "saldo-nilai pemasukan" : "saldo-nilai pengeluaran"}>Rp {saldo.toLocaleString("id-ID")}</p>
    </Kartu>
  );
}

export default RingkasanSaldo;
