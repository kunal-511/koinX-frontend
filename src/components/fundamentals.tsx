interface DataRowProps {
  label: string;
  value: string | number;
  suffix?: string;
}

function DataRow({ label, value, suffix }: DataRowProps) {
  return (
    <div className="flex justify-between py-3 border-b border-gray-200 last:border-0">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">
        {typeof value === "number" ? value.toLocaleString() : value}
        {suffix}
      </span>
    </div>
  );
}

export function Fundamentals() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold">Fundamentals</h2>
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path strokeWidth="2" d="M12 16v-4M12 8h.01" />
        </svg>
      </div>
      <div className="grid md:grid-cols-2 gap-20">
        <div className="space-y-1">
          <DataRow label="Bitcoin Price" value="$16,815.46" />
          <DataRow label="24h Low / 24h High" value="$16,382.07 / $16,874.12" />
          <DataRow label="7d Low / 7d High" value="$16,382.07 / $16,874.12" />
          <DataRow label="Trading Volume" value="$23,249,202,782" />
          <DataRow label="Market Cap Rank" value="#1" />
          <DataRow label="" value="" />
        </div>
        <div className="space-y-1">
          <DataRow label="Market Cap" value="$323,507,290,047" />
          <DataRow label="Market Cap Dominance" value="38.343" suffix="%" />
          <DataRow label="Volume / Market Cap" value="0.0718" />
          <DataRow label="All-Time High" value="$69,044.77" suffix=" -75.6%" />
          <DataRow label="All-Time Low" value="$67.81" suffix=" 24729.1%" />
          <DataRow label="" value="" suffix="" />
        </div>
      </div>
    </div>
  );
}
