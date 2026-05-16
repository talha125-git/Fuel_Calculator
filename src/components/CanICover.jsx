import GaugeArc from "./GaugeArc";

export default function CanICover({ amount, setAmount, neededKm, setNeededKm, mileage, price }) {
  const kmResult = (amount / price) * mileage;
  const moneyForKm = (km) => (km / mileage) * price;
  const canCover = kmResult >= neededKm;

  return (
    <div style={{ background: "#0f1f12", border: "1px solid #1a3d1a", borderRadius: 16, padding: "1.25rem" }}>
      <p style={{ fontSize: "0.7rem", letterSpacing: 2, color: "#4ade80", margin: "0 0 16px", fontWeight: 600 }}>CAN I COVER THE DISTANCE?</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
        <div>
          <label style={{ fontSize: "0.75rem", color: "#94a3b8", display: "block", marginBottom: 6 }}>My budget (₨)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            style={{ width: "100%", background: "#0a1a0a", border: "2px solid #22c55e", borderRadius: 10, padding: "10px 12px", color: "#f0fdf4", fontSize: "1.1rem", fontWeight: 700, fontFamily: "monospace", outline: "none", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <label style={{ fontSize: "0.75rem", color: "#94a3b8", display: "block", marginBottom: 6 }}>Distance to cover (km)</label>
          <input
            type="number"
            value={neededKm}
            onChange={(e) => setNeededKm(Number(e.target.value))}
            style={{ width: "100%", background: "#0a1a0a", border: "2px solid #f59e0b", borderRadius: 10, padding: "10px 12px", color: "#f0fdf4", fontSize: "1.1rem", fontWeight: 700, fontFamily: "monospace", outline: "none", boxSizing: "border-box" }}
          />
        </div>
      </div>

      <GaugeArc percent={Math.min((kmResult / neededKm) * 100, 120)} />

      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <div style={{ fontSize: "2rem", fontWeight: 900, color: canCover ? "#22c55e" : "#ef4444" }}>
          {canCover ? "✅ YES, COVERED!" : "❌ NOT ENOUGH"}
        </div>
        <div style={{ fontSize: "0.85rem", color: "#64748b", marginTop: 4 }}>
          ₨{amount} gives you <span style={{ color: "#22c55e", fontWeight: 700 }}>{kmResult.toFixed(1)} km</span> · you need <span style={{ color: "#f59e0b", fontWeight: 700 }}>{neededKm} km</span>
        </div>
      </div>

      {canCover ? (
        <div style={{ background: "#052e0a", border: "1px solid #166534", borderRadius: 10, padding: "12px 14px", textAlign: "center" }}>
          <span style={{ color: "#4ade80", fontWeight: 600, fontSize: "0.9rem" }}>🛵 {(kmResult - neededKm).toFixed(1)} km to spare!</span>
        </div>
      ) : (
        <div style={{ background: "#2d0a0a", border: "1px solid #7f1d1d", borderRadius: 10, padding: "12px 14px", textAlign: "center" }}>
          <div style={{ color: "#fca5a5", fontWeight: 600, fontSize: "0.9rem" }}>
            Short by {(neededKm - kmResult).toFixed(1)} km · Put at least <span style={{ color: "#ef4444" }}>₨{Math.ceil(moneyForKm(neededKm))}</span>
          </div>
          <div style={{ fontSize: "0.78rem", color: "#6b7280", marginTop: 4 }}>
            You need ₨{Math.ceil(moneyForKm(neededKm) - amount)} more
          </div>
        </div>
      )}
    </div>
  );
}