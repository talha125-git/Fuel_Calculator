import { useState } from "react";
import BikeSetup from "./components/BikeSetup";
import MoneyToKm from "./components/MoneyToKm";
import KmToMoney from "./components/KmToMoney";
import CanICover from "./components/CanICover";
import QuickReference from "./components/QuickReference";

const TABS = [
  { id: "money", label: "💰 Money → KM" },
  { id: "km",    label: "📍 KM → Money" },
  { id: "check", label: "✅ Can I Cover?" },
];

export default function App() {
  const [mileage, setMileage] = useState(55);
  const [price, setPrice]     = useState(416);
  const [amount, setAmount]   = useState(900);
  const [neededKm, setNeededKm] = useState(90);
  const [tab, setTab]         = useState("money");

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: "#080f1a", minHeight: "100vh", color: "#e2e8f0" }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #0d1f0f 100%)", borderBottom: "1px solid #1e3a1e", padding: "1.5rem 1rem 1rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg, #22c55e, #16a34a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>⛽</div>
            <div>
              <h1 style={{ fontSize: "1.5rem", fontWeight: 900, margin: 0, letterSpacing: "-0.5px", color: "#f0fdf4" }}>Fuel Calculator</h1>
              <p style={{ fontSize: "0.75rem", color: "#4ade80", margin: 0, letterSpacing: 1 }}>PAKISTAN · PKR</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "1rem" }}>

        {/* Bike Setup */}
        <BikeSetup
          mileage={mileage}
          setMileage={setMileage}
          price={price}
          setPrice={setPrice}
        />

        {/* Tab Switcher */}
        <div style={{ display: "flex", gap: 8, marginBottom: "1rem" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 6px", borderRadius: 12, border: `1px solid ${tab === t.id ? "#22c55e" : "#1e3a1e"}`, background: tab === t.id ? "#14532d" : "#0f1f12", color: tab === t.id ? "#4ade80" : "#64748b", fontSize: "0.78rem", fontWeight: tab === t.id ? 700 : 400, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Active Tab */}
        {tab === "money" && (
          <MoneyToKm
            amount={amount}
            setAmount={setAmount}
            mileage={mileage}
            price={price}
          />
        )}
        {tab === "km" && (
          <KmToMoney
            neededKm={neededKm}
            setNeededKm={setNeededKm}
            mileage={mileage}
            price={price}
          />
        )}
        {tab === "check" && (
          <CanICover
            amount={amount}
            setAmount={setAmount}
            neededKm={neededKm}
            setNeededKm={setNeededKm}
            mileage={mileage}
            price={price}
          />
        )}

        {/* Quick Reference */}
        <QuickReference mileage={mileage} price={price} />

        <p style={{ textAlign: "center", fontSize: "0.7rem", color: "#374151", marginTop: "1.5rem" }}>
          Change mileage & price above to update all calculations
        </p>
      </div>

      {/* Footer Credit */}
      <div style={{ position: "fixed", bottom: 16, right: 16, background: "#0f1f12", border: "1px solid #1a3d1a", borderRadius: 10, padding: "6px 12px", display: "flex", alignItems: "center", gap: 6, backdropFilter: "blur(8px)" }}>
        <span style={{ fontSize: "0.65rem", color: "#4b5563", letterSpacing: 0.5 }}>dev & design by</span>
        <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#4ade80", letterSpacing: 0.5 }}>Talha</span>
      </div>
    </div>
  );
}

