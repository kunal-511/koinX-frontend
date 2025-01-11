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
      <div className="flex justify-between  text-gray-500">
        <span>{label} Low</span>
        <span>{label} High</span>
      </div>
      <div className="flex justify-between items-center gap-3 md:gap-4">
        <span className=" font-medium min-w-[70px] md:min-w-[80px]">
          {low.toLocaleString()}
        </span>
        <div className="flex-1">
          <ProgressBar value={current} min={low} max={high} />
        </div>
        <span className=" font-medium min-w-[70px] md:min-w-[80px] text-right">
          {high.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export function Performance() {
  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-2xl font-bold px-4 md:px-0">
        Performance
      </h2>
      <div className="space-y-4 bg-white p-4 md:p-6 rounded-lg">
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
