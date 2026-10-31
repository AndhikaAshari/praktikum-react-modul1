// src/BadgeSkill.jsx
function BadgeSkill({ namaSkill, level }) {
  const warnaLevel = {
    Pemula: { bg: "rgba(0, 122, 255, 0.16)", teks: "#0a5fcc" },
    Menengah: { bg: "rgba(255, 149, 0, 0.18)", teks: "#b25e00" },
    Mahir: { bg: "rgba(52, 199, 89, 0.18)", teks: "#1e7b34" },
  };

  const warna = warnaLevel[level] || { bg: "rgba(120, 120, 128, 0.16)", teks: "#3c3c43" };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "7px 14px",
        margin: "0 8px 8px 0",
        borderRadius: "999px",
        fontSize: "13px",
        fontWeight: 600,
        backgroundColor: warna.bg,
        color: warna.teks,
        border: "1px solid rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {namaSkill} · {level}
    </span>
  );
}

export default BadgeSkill;
