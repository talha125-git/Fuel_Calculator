export default function MoneyToKm({ amount, setAmount, mileage, price }) {
  const kmFromMoney = (amt) => (amt / price) * mileage;
  const litersFromMoney = (amt) => amt / price;

  return (
    <div style={{ background: "#0f1f12", border: "1px solid #1a3d1a", borderRadius: 16, padding: "1.25rem" }}>
      <p style={{ fontSize: "0.7rem", letterSpacing: 2, color: "#4ade80", margin: "0 0 16px", fontWeight: 600 }}>HOW FAR CAN I GO?</p>
      <label style={{ fontSize: "0.75rem", color: "#94a3b8", display: "block", marginBottom: 6 }}>Enter amount in Rupees</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{ width: "100%", background: "#0a1a0a", border: "2px solid #22c55e", borderRadius: 10, padding: "12px 14px", color: "#f0fdf4", fontSize: "1.3rem", fontWeight: 700, fontFamily: "monospace", outline: "none", boxSizing: "border-box", marginBottom: 20 }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div style={{ background: "#051005", border: "1px solid #14532d", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
          <div style={{ fontSize: "0.7rem", color: "#4ade80", letterSpacing: 1, marginBottom: 4 }}>DISTANCE</div>
          <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#22c55e", fontFamily: "monospace", lineHeight: 1 }}>{kmFromMoney(amount).toFixed(1)}</div>
          <div style={{ fontSize: "0.85rem", color: "#64748b" }}>kilometres</div>
        </div>
        <div style={{ background: "#051005", border: "1px solid #14532d", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
          <div style={{ fontSize: "0.7rem", color: "#4ade80", letterSpacing: 1, marginBottom: 4 }}>PETROL</div>
          <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#22c55e", fontFamily: "monospace", lineHeight: 1 }}>{litersFromMoney(amount).toFixed(2)}</div>
          <div style={{ fontSize: "0.85rem", color: "#64748b" }}>litres</div>
        </div>
      </div>

      <div style={{ marginTop: 12, padding: "10px 14px", background: "#0a1a0a", borderRadius: 8, fontSize: "0.82rem", color: "#64748b" }}>
        ₨{amount} ÷ ₨{price}/L × {mileage} km/L = <span style={{ color: "#4ade80", fontWeight: 700 }}>{kmFromMoney(amount).toFixed(1)} km</span>
      </div>
    </div>
  );
}