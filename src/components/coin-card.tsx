import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface CoinCardProps {
  name: string;
  symbol: string;
  price: string;
  priceChange: number;
  image: string;
  sparkline: string;
}

export function CoinCard({
  name,
  symbol,
  price,
  priceChange,
  image,
  sparkline,
}: CoinCardProps) {
  const isPositive = priceChange >= 0;

  return (
    <Card className="min-w-[250px] max-w-[250px]">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <img
            src={image}
            alt={name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="font-medium">{symbol}</span>
          <span
            className={`flex items-center text-sm ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? (
              <ArrowUp className="h-3 w-3" />
            ) : (
              <ArrowDown className="h-3 w-3" />
            )}
            {Math.abs(priceChange).toFixed(2)}%
          </span>
        </div>
        <div className="text-xl font-bold mb-2">${price}</div>
        <img
          src={sparkline}
          alt={`${name} price graph`}
          width={200}
          height={60}
          className={`w-full ${isPositive ? "text-green-500" : "text-red-500"}`}
        />
      </CardContent>
    </Card>
  );
}
