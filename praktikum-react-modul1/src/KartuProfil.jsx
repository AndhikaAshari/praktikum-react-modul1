// src/KartuProfil.jsx
import React from "react";

function KartuProfil({ nama, npm, kelas, status, fotoUrl }) {
  const aktif = status === "Aktif";

  return (
    <div
      className="glass"
      style={{
        borderRadius: "28px",
        padding: "24px",
        maxWidth: "450px",
        marginBottom: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <img
          src={fotoUrl || "https://via.placeholder.com/80"}
          alt={`Foto ${nama}`}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid rgba(255, 255, 255, 0.85)",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
          }}
        />
        <div>
          <h3 style={{ margin: "0 0 6px 0", fontSize: "22px", fontWeight: 700, letterSpacing: "-0.02em" }}>{nama}</h3>
          <p style={{ margin: "2px 0", fontSize: "14px", color: "#6e6e73" }}>
            NRP: <strong style={{ color: "#1d1d1f" }}>{npm}</strong>
          </p>
          <p style={{ margin: "2px 0", fontSize: "14px", color: "#6e6e73" }}>Kelas: {kelas}</p>
        </div>
      </div>

      <div style={{ marginTop: "18px", borderTop: "1px solid rgba(60, 60, 67, 0.15)", paddingTop: "14px" }}>
        <span
          style={{
            padding: "5px 12px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: 600,
            backgroundColor: aktif ? "rgba(52, 199, 89, 0.18)" : "rgba(255, 149, 0, 0.18)",
            color: aktif ? "#1e7b34" : "#b25e00",
          }}
        >
          Status Akademik: {status}
        </span>
      </div>
    </div>
  );
}

export default KartuProfil;
