import GaugeArc from "./GaugeArc";

export default function CanICover({ amount, setAmount, neededKm, setNeededKm, mileage, price }) {
  const kmResult = (amount / price) * mileage;
  const moneyForKm = (km) => (km / mileage) * price;
  const canCover = kmResult >= neededKm;

  return (
    <div className="bg-[#0f1f12] border border-[#1a3d1a] rounded-2xl p-5">
      <p className="text-[0.7rem] tracking-[2px] text-green-400 m-0 mb-4 font-semibold">CAN I COVER THE DISTANCE?</p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="text-xs text-slate-400 block mb-1.5">My budget (₨)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-[#0a1a0a] border-2 border-green-500 rounded-lg py-2.5 px-3 text-[#f0fdf4] text-lg font-bold font-mono outline-none box-border"
          />
        </div>
        <div>
          <label className="text-xs text-slate-400 block mb-1.5">Distance to cover (km)</label>
          <input
            type="number"
            value={neededKm}
            onChange={(e) => setNeededKm(Number(e.target.value))}
            className="w-full bg-[#0a1a0a] border-2 border-amber-500 rounded-lg py-2.5 px-3 text-[#f0fdf4] text-lg font-bold font-mono outline-none box-border"
          />
        </div>
      </div>

      <GaugeArc percent={Math.min((kmResult / neededKm) * 100, 120)} />

      <div className="text-center mb-4">
        <div className={`text-3xl font-black ${canCover ? "text-green-500" : "text-red-500"}`}>
          {canCover ? "✅ YES, COVERED!" : "❌ NOT ENOUGH"}
        </div>
        <div className="text-sm text-slate-500 mt-1">
          ₨{amount} gives you <span className="text-green-500 font-bold">{kmResult.toFixed(1)} km</span> · you need <span className="text-amber-500 font-bold">{neededKm} km</span>
        </div>
      </div>

      {canCover ? (
        <div className="bg-[#052e0a] border border-green-800 rounded-lg py-3 px-3.5 text-center">
          <span className="text-green-400 font-semibold text-sm">🛵 {(kmResult - neededKm).toFixed(1)} km to spare!</span>
        </div>
      ) : (
        <div className="bg-[#2d0a0a] border border-red-900 rounded-lg py-3 px-3.5 text-center">
          <div className="text-red-300 font-semibold text-sm">
            Short by {(neededKm - kmResult).toFixed(1)} km · Put at least <span className="text-red-500">₨{Math.ceil(moneyForKm(neededKm))}</span>
          </div>
          <div className="text-[0.78rem] text-gray-500 mt-1">
            You need ₨{Math.ceil(moneyForKm(neededKm) - amount)} more
          </div>
        </div>
      )}
    </div>
  );
}