import "./globals.css";

export const metadata = {
  title: "Alan Sun — La tua AI 24/7",
  description: "Foto, testi, email ed esercizi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <header style={{ position: "sticky", top: 0, padding: "12px 16px", backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.4)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
            <a href="/" style={{ fontWeight: 800 }}>Alan <span style={{ color: "#FF7A00" }}>Sun</span></a>
            <nav style={{ display: "flex", gap: 12 }}>
              <a href="/features">Funzioni</a>
              <a href="/pricing">Prezzi</a>
            </nav>
          </div>
        </header>
        {children}
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 32, padding: "16px 0" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-between", opacity: 0.7, fontSize: 14 }}>
            <span>© {new Date().getFullYear()} Alan Sun</span>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="#">Privacy</a>
              <a href="#">Termini</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
