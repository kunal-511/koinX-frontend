"use client";

import { useEffect, useState } from "react";
import { getCoinData } from "../actions/get-trending-coins";
import { CoinCard } from "./coin-card";
import { Carousel } from "./carousel";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  price: string;
  priceChange: number;
  image: string;
  sparkline: string;
}

export default function CryptoCarousel() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getCoinData();
      setCoins(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-8">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
            <div className="flex gap-4">
              {[...Array(4)].map((_, j) => (
                <div
                  key={j}
                  className="h-40 w-[250px] bg-gray-200 rounded animate-pulse"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8 py-4">
      <Carousel title="You May Also Like">
        {coins.map((coin) => (
          <CoinCard key={coin.id} {...coin} />
        ))}
      </Carousel>

      <Carousel title="Trending Coins">
        {coins.map((coin) => (
          <CoinCard key={coin.id} {...coin} />
        ))}
      </Carousel>
    </div>
  );
}
