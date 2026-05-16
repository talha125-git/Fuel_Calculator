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
    <div className="font-['Outfit',sans-serif] bg-[#080f1a] min-h-screen text-[#e2e8f0]">
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />

      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f172a] to-[#0d1f0f] border-b border-[#1e3a1e] pt-6 px-4 pb-4">
        <div className="max-w-[700px] mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-xl">⛽</div>
            <div>
              <h1 className="text-2xl font-black m-0 tracking-tight text-[#f0fdf4]">Fuel Calculator</h1>
              <p className="text-xs text-green-400 m-0 tracking-widest">PAKISTAN · PKR</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[700px] mx-auto p-4">

        {/* Bike Setup */}
        <BikeSetup
          mileage={mileage}
          setMileage={setMileage}
          price={price}
          setPrice={setPrice}
        />

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-4">
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex-1 py-2.5 px-1.5 rounded-xl border text-[0.78rem] cursor-pointer transition-all duration-150 ${tab === t.id ? 'border-green-500 bg-[#14532d] text-green-400 font-bold' : 'border-[#1e3a1e] bg-[#0f1f12] text-slate-500 font-normal'}`}>
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

        <p className="text-center text-[0.7rem] text-gray-700 mt-6">
          Change mileage & price above to update all calculations
        </p>
      </div>

      {/* Footer Credit */}
      <div className="fixed bottom-4 right-4 bg-[#0f1f12]/80 border border-[#1a3d1a] rounded-lg py-1.5 px-3 flex items-center gap-1.5 backdrop-blur-md">
        <span className="text-[0.65rem] text-gray-600 tracking-wide">dev & design by</span>
        <span className="text-[0.72rem] font-bold text-green-400 tracking-wide">Talha</span>
      </div>
    </div>
  );
}
