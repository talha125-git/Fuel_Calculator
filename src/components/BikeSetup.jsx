export default function BikeSetup({ mileage, setMileage, price, setPrice }) {
  const handleMileageChange = (v) => {
    if (v && !isNaN(v) && Number(v) > 0) setMileage(Number(v));
  };

  return (
    <div style={{ background: "#0f1f12", border: "1px solid #1a3d1a", borderRadius: 16, padding: "1.25rem", marginBottom: "1rem" }}>
      <p style={{ fontSize: "0.7rem", letterSpacing: 2, color: "#4ade80", margin: "0 0 12px", fontWeight: 600 }}>BIKE SETUP</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        <div>
          <label style={{ fontSize: "0.7rem", color: "#4ade80", letterSpacing: 1, fontWeight: 600, display: "block", marginBottom: 4 }}>MILEAGE (km/L)</label>
          <input
            type="number"
            defaultValue={mileage}
            onChange={(e) => handleMileageChange(e.target.value)}
            style={{ width: "100%", background: "#0a1a0a", border: "1px solid #1e3a1e", borderRadius: 8, padding: "8px 10px", color: "#f0fdf4", fontSize: "1rem", fontWeight: 600, fontFamily: "monospace", outline: "none", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <label style={{ fontSize: "0.7rem", color: "#4ade80", letterSpacing: 1, fontWeight: 600, display: "block", marginBottom: 4 }}>PETROL PRICE (₨/L)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={{ width: "100%", background: "#0a1a0a", border: "1px solid #1e3a1e", borderRadius: 8, padding: "8px 10px", color: "#f0fdf4", fontSize: "1rem", fontWeight: 600, fontFamily: "monospace", outline: "none", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <label style={{ fontSize: "0.7rem", color: "#4ade80", letterSpacing: 1, fontWeight: 600, display: "block", marginBottom: 4 }}>₨1 LITRE COVERS</label>
          <div style={{ background: "#0a1a0a", border: "1px solid #1e3a1e", borderRadius: 8, padding: "8px 10px", fontSize: "1rem", fontWeight: 700, color: "#22c55e", fontFamily: "monospace" }}>
            {(mileage / price * 100).toFixed(2)} km
          </div>
        </div>
      </div>
    </div>
  );
}