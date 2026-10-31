// src/KartuProyek.jsx
function KartuProyek({ judul, deskripsi, teknologi, repoUrl }) {
  return (
    <div
      className="glass glass-hover"
      style={{
        borderRadius: "24px",
        padding: "22px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h3 style={{ margin: 0, fontSize: "19px", fontWeight: 700, letterSpacing: "-0.01em" }}>{judul}</h3>

      <p style={{ margin: 0, fontSize: "14px", color: "#6e6e73", lineHeight: 1.5 }}>{deskripsi}</p>

      <div>
        {teknologi.map((tag) => (
          <span
            key={tag}
            style={{
              display: "inline-block",
              padding: "4px 11px",
              margin: "0 6px 6px 0",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 500,
              backgroundColor: "rgba(0, 122, 255, 0.12)",
              color: "#0a5fcc",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>

      <a className="tombol-apple" href={repoUrl} target="_blank" rel="noreferrer" style={{ alignSelf: "flex-start" }}>
        Lihat Repositori GitHub
      </a>
    </div>
  );
}

export default KartuProyek;
