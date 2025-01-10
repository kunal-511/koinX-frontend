"use client";

import { Badge } from "@/components/ui/badge";
import { CoinGeckoResponse } from "@/lib/types";
import { formatCurrency, formatPercentage } from "@/lib/formats";
import { useEffect, useState } from "react";

export function PriceDisplay() {
  const [priceData, setPriceData] = useState<CoinGeckoResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24h_change=true"
        );
        if (!response.ok) throw new Error("Failed to fetch price data");
        const data = await response.json();
        setPriceData(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch price data"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div className="text-destructive">Error: {error}</div>;
  }

  if (loading) {
    return (
      <div className="animate-pulse space-y-2">
        <div className="h-8 w-32 bg-muted rounded" />
        <div className="h-6 w-24 bg-muted rounded" />
      </div>
    );
  }

  if (!priceData) return null;

  const { usd, inr, usd_24h_change } = priceData.bitcoin;

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-3xl font-bold">{formatCurrency(usd, "USD")}</span>
        <Badge
          variant={usd_24h_change >= 0 ? "success" : "destructive"}
          className="h-6"
        >
          <span
            className={
              usd_24h_change >= 0 ? "text-emerald-600" : "text-destructive"
            }
          >
            {usd_24h_change >= 0 ? "↑" : "↓"}{" "}
            {formatPercentage(Math.abs(usd_24h_change))}
          </span>
          <span className="text-muted-foreground ml-1">(24H)</span>
        </Badge>
      </div>
      <p className="text-lg text-muted-foreground">
        {formatCurrency(inr, "INR")}
      </p>
    </div>
  );
}
