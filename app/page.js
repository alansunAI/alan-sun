export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: 800 }}>
        Alan <span style={{ color: "#FF7A00" }}>Sun</span>
      </h1>
      <p style={{ marginTop: 16, opacity: 0.8 }}>
        La tua AI 24/7 per foto, testi, email ed esercizi.
      </p>

      {/* Bottone Inizia Ora */}
      <a 
        href="/pricing" 
        style={{ 
          display: "inline-block",
          marginTop: 32,
          padding: "12px 24px",
          borderRadius: 12,
          background: "#FF7A00",
          color: "#000",
          fontWeight: 700,
          fontSize: "1.2rem"
        }}
      >
        Inizia ora
      </a>
    </main>
  );
}
