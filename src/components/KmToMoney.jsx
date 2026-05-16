export default function KmToMoney({ neededKm, setNeededKm, mileage, price }) {
  const moneyForKm = (km) => (km / mileage) * price;

  return (
    <div className="bg-[#0f1f12] border border-[#1a3d1a] rounded-2xl p-5">
      <p className="text-[0.7rem] tracking-[2px] text-green-400 m-0 mb-4 font-semibold">HOW MUCH DO I NEED?</p>
      <label className="text-xs text-slate-400 block mb-1.5">Enter distance in KM</label>
      <input
        type="number"
        value={neededKm}
        onChange={(e) => setNeededKm(Number(e.target.value))}
        className="w-full bg-[#0a1a0a] border-2 border-green-500 rounded-lg py-3 px-3.5 text-[#f0fdf4] text-xl font-bold font-mono outline-none box-border mb-5"
      />

      <div className="grid grid-cols-2 gap-2.5">
        <div className="bg-[#051005] border border-[#14532d] rounded-xl p-4 text-center">
          <div className="text-[0.7rem] text-green-400 tracking-[1px] mb-1">MIN MONEY</div>
          <div className="text-4xl font-black text-green-500 font-mono leading-none">{Math.ceil(moneyForKm(neededKm))}</div>
          <div className="text-sm text-slate-500">rupees</div>
        </div>
        <div className="bg-[#051005] border border-[#14532d] rounded-xl p-4 text-center">
          <div className="text-[0.7rem] text-green-400 tracking-[1px] mb-1">PETROL NEEDED</div>
          <div className="text-4xl font-black text-green-500 font-mono leading-none">{(neededKm / mileage).toFixed(2)}</div>
          <div className="text-sm text-slate-500">litres</div>
        </div>
      </div>

      <div className="mt-3 py-2.5 px-3.5 bg-[#0a1a0a] rounded-lg text-[0.82rem] text-slate-500">
        {neededKm} km ÷ {mileage} km/L × ₨{price}/L = <span className="text-green-400 font-bold">₨{Math.ceil(moneyForKm(neededKm))}</span>
      </div>
    </div>
  );
}