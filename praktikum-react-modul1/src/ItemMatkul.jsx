// src/ItemMatkul.jsx
function ItemMatkul({ kode, nama, sks, hari }) {
  return (
    <div
      className="glass glass-hover"
      style={{
        padding: "16px 20px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div>
        <span style={{ fontWeight: 700, color: "#007aff" }}>{kode}</span>
        <span style={{ color: "#1d1d1f" }}> · {nama}</span>
        <div style={{ fontSize: "12px", color: "#6e6e73", marginTop: "4px" }}>Jadwal Sesi: {hari}</div>
      </div>
      <span
        style={{
          backgroundColor: "rgba(120, 120, 128, 0.16)",
          padding: "5px 12px",
          borderRadius: "999px",
          fontSize: "13px",
          fontWeight: 600,
          whiteSpace: "nowrap",
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;
