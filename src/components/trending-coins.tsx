"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCoinData } from "../actions/get-trending-coins";
import { ArrowUp } from "lucide-react";

interface Coin {
  name: string;
  symbol: string;
  priceChange: number;
  image: string;
}

export default function TrendingCoins() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrendingCoins() {
      try {
        const data = await getCoinData();
        setCoins(data);
      } catch {
        setError("Failed to fetch trending coins");
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendingCoins();
  }, []);

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-red-500">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Trending Coins (24h)
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-8 bg-gray-200 animate-pulse rounded" />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {coins.slice(0, 3).map((coin) => (
              <div
                key={coin.symbol}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="font-medium">
                    {coin.name} ({coin.symbol})
                  </span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-600 rounded">
                  <ArrowUp className="h-3 w-3" />
                  <span className="text-sm font-medium">
                    {coin.priceChange.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
