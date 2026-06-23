export default function QuickReference({ mileage, price }) {
  const kmFromMoney = (amt) => (amt / price) * mileage;

  return (
    <div className="bg-[#0f1f12] border border-[#1a3d1a] rounded-2xl p-5 mt-4">
      <p className="text-[0.7rem] tracking-[2px] text-green-400 m-0 mb-3 font-semibold">QUICK REFERENCE</p>
      <div className="grid grid-cols-4 gap-2">
        {[50, 70, 100, 200, 300, 500,700, 1000,].map((v) => (
          <div key={v} className="bg-[#0a1a0a] rounded-lg p-2 text-center border border-[#1e3a1e]">
            <div className="text-[0.7rem] text-green-400 font-semibold">₨{v}</div>
            <div className="text-base font-bold text-[#f0fdf4] font-mono">{kmFromMoney(v).toFixed(0)}</div>
            <div className="text-[0.65rem] text-slate-500">km</div>
          </div>
        ))}
      </div>
    </div>
  );
}