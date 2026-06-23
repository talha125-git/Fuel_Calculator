export default function BikeSetup({ mileage, setMileage, price, setPrice }) {
  const handleMileageChange = (v) => {
    if (v && !isNaN(v) && Number(v) > 0) setMileage(Number(v));
  };

  return (
    <div className="bg-[#0f1f12] border border-[#1a3d1a] rounded-2xl p-5 mb-4">
      <p className="text-[0.7rem] tracking-[2px] text-green-400 m-0 mb-3 font-semibold">BIKE SETUP</p>

      <div className="grid grid-cols-2 gap-2.5">
        <div className="flex flex-col justify-end">
          <label className="text-[0.7rem] text-green-400 tracking-[1px] font-semibold block mb-1">MILEAGE (km/L)</label>
          <input
            type="number"
            defaultValue={mileage}
            onChange={(e) => handleMileageChange(e.target.value)}
            className="w-full bg-[#0a1a0a] border border-[#1e3a1e] rounded-lg py-2 px-2.5 text-[#f0fdf4] text-base font-semibold font-mono outline-none box-border"
          />
        </div>
        <div className="flex flex-col justify-end">
          <label className="text-[0.7rem] text-green-400 tracking-[1px] font-semibold block mb-1">PRICE (Rs/L)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full bg-[#0a1a0a] border border-[#1e3a1e] rounded-lg py-2 px-2.5 text-[#f0fdf4] text-base font-semibold font-mono outline-none box-border"
          />
        </div>
        {/* <div className="flex flex-col justify-end">
          <label className="text-[0.7rem] text-green-400 tracking-[1px] font-semibold block mb-1">₨1 LITRE COVERS</label>
          <div className="bg-[#0a1a0a] border border-[#1e3a1e] rounded-lg py-2 px-2.5 text-base font-bold text-green-500 font-mono">
            {(mileage / price * 100).toFixed(2)} km
          </div>
        </div> */}
      </div>
    </div>
  );
}
