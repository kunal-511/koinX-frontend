interface ProgressBarProps {
  value: number;
  min: number;
  max: number;
}

export function ProgressBar({ value, min, max }: ProgressBarProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full">
      <div
        className="w-1 h-full bg-black rounded-full relative"
        style={{ marginLeft: `${percentage}%` }}
      >
        <div className="absolute -top-1 -ml-1 w-3 h-3 bg-black rounded-full" />
      </div>
    </div>
  );
}
