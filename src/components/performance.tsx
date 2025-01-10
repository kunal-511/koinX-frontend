import { ProgressBar } from "./progress-bar";

interface RangeProps {
  label: string;
  low: number;
  high: number;
  current: number;
}

function Range({ label, low, high, current }: RangeProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-500">
        <span>{label} Low</span>
        <span>{label} High</span>
      </div>
      <div className="flex justify-between items-center gap-4">
        <span className=" ">{low.toLocaleString()}</span>
        <div className="flex-1">
          <ProgressBar value={current} min={low} max={high} />
        </div>
        <span className="">{high.toLocaleString()}</span>
      </div>
    </div>
  );
}

export function Performance() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Performance</h2>
      <div className="space-y-4">
        <Range
          label="Today's"
          low={46930.22}
          high={49343.83}
          current={48637.83}
        />
        <Range label="52W" low={16930.22} high={49743.83} current={48637.83} />
      </div>
    </div>
  );
}
