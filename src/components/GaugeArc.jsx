export default function GaugeArc({ percent }) {
  const r = 54;
  const cx = 70;
  const cy = 70;
  const startAngle = -210;
  const sweep = 240;
  const endAngle = startAngle + sweep * Math.min(percent / 100, 1);
  const toRad = (d) => (d * Math.PI) / 180;
  const arcPath = (start, end) => {
    const s = { x: cx + r * Math.cos(toRad(start)), y: cy + r * Math.sin(toRad(start)) };
    const e = { x: cx + r * Math.cos(toRad(end)), y: cy + r * Math.sin(toRad(end)) };
    const large = end - start > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
  };
  const color = percent > 66 ? "#22c55e" : percent > 33 ? "#f59e0b" : "#ef4444";
  return (
    <svg viewBox="0 0 140 110" className="w-full max-w-xs mx-auto">
      <path d={arcPath(startAngle, startAngle + sweep)} fill="none" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
      {percent > 0 && (
        <path d={arcPath(startAngle, endAngle)} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 6px ${color}88)` }} />
      )}
      <text x={cx} y={cy + 4} textAnchor="middle" fill={color} fontSize="22" fontWeight="bold" fontFamily="monospace">
        {Math.round(percent)}%
      </text>
      <text x={cx} y={cy + 20} textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="sans-serif">COVERAGE</text>
    </svg>
  );
}