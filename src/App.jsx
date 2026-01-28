import { motion } from "framer-motion";

const files = [
  {
    id: 1,
    name: "Sinix",
    version: "1.0.0",
    size: "7 MB",
    description: "Fichier officiel Sinix",
    url: "https://www.mediafire.com/file/0wu1jhqm6k3iv0f/Sinix.zip.zip/file",
  },
];

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000, #18181b, #000)",
        color: "white",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 40,
        }}
      >
        <img src="/logo.png" alt="Sinix" width="56" />
        <div>
          <h1>Sinix</h1>
          <p style={{ color: "#aaa" }}>Centre de téléchargement</p>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          Téléchargements disponibles
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: 16,
            marginTop: 20,
          }}
        >
          {files.map((file) => (
            <motion.div
              key={file.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: "#18181b",
                border: "1px solid #333",
                borderRadius: 12,
                padding: 16,
              }}
            >
              <h3>{file.name}</h3>
              <p style={{ color: "#aaa" }}>{file.description}</p>
              <small>
                Version {file.version} – {file.size}
              </small>

              <br />
              <br />

              <a
                href={file.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  background: "white",
                  color: "black",
                  padding: "8px 16px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Télécharger
              </a>
            </motion.div>
          ))}
        </div>
      </main>

      <footer style={{ textAlign: "center", marginTop: 60, color: "#888" }}>
        <a
          href="https://discord.gg/sqtrzRzgbF"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#7aa2ff" }}
        >
          Rejoindre le Discord Sinix
        </a>
        <div>© {new Date().getFullYear()} Sinix.fun</div>
      </footer>
    </div>
  );
}
