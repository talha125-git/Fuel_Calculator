export default function QuickReference({ mileage, price }) {
  const kmFromMoney = (amt) => (amt / price) * mileage;

  return (
    <div style={{ background: "#0f1f12", border: "1px solid #1a3d1a", borderRadius: 16, padding: "1.25rem", marginTop: "1rem" }}>
      <p style={{ fontSize: "0.7rem", letterSpacing: 2, color: "#4ade80", margin: "0 0 12px", fontWeight: 600 }}>QUICK REFERENCE</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
        {[50, 70, 100, 200, 250, 500, 1000,].map((v) => (
          <div key={v} style={{ background: "#0a1a0a", borderRadius: 8, padding: "8px", textAlign: "center", border: "1px solid #1e3a1e" }}>
            <div style={{ fontSize: "0.7rem", color: "#4ade80", fontWeight: 600 }}>₨{v}</div>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: "#f0fdf4", fontFamily: "monospace" }}>{kmFromMoney(v).toFixed(0)}</div>
            <div style={{ fontSize: "0.65rem", color: "#64748b" }}>km</div>
          </div>
        ))}
      </div>
    </div>
  );
}