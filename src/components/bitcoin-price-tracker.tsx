"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { PriceDisplay } from "./price-display";

export default function BitcoinTracker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (typeof TradingView !== "undefined" && containerRef.current) {
        new TradingView.widget({
          container_id: "tradingview-widget",
          symbol: "BITSTAMP:BTCUSD",
          interval: "D",
          timezone: "exchange",
          theme: "light",
          style: "1",
          toolbar_bg: "#f1f5f9",
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_legend: true,
          save_image: false,
          height: 400,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 1)",
          gridColor: "rgba(242, 242, 242, 0.06)",
          time_frames: [
            { text: "1H", resolution: "1" },
            { text: "24H", resolution: "15" },
            { text: "7D", resolution: "30" },
            { text: "1M", resolution: "60" },
            { text: "3M", resolution: "120" },
            { text: "6M", resolution: "240" },
            { text: "1Y", resolution: "D" },
            { text: "ALL", resolution: "W" },
          ],
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <span>Cryptocurrencies</span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Bitcoin</span>
      </nav>

      <Card>
        <CardHeader className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold">Bitcoin</h1>
            <span className="text-xl text-muted-foreground">BTC</span>
            <Badge variant="secondary" className="h-6">
              Rank #1
            </Badge>
          </div>

          <PriceDisplay />
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Bitcoin Price Chart (USD)</h2>

            <Tabs defaultValue="7D" className="w-full">
              <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-2">
                <TabsTrigger value="1H">1H</TabsTrigger>
                <TabsTrigger value="24H">24H</TabsTrigger>
                <TabsTrigger value="7D">7D</TabsTrigger>
                <TabsTrigger value="1M">1M</TabsTrigger>
                <TabsTrigger value="3M">3M</TabsTrigger>
                <TabsTrigger value="6M">6M</TabsTrigger>
                <TabsTrigger value="1Y">1Y</TabsTrigger>
                <TabsTrigger value="ALL">ALL</TabsTrigger>
              </TabsList>
            </Tabs>

            <div
              ref={containerRef}
              id="tradingview-widget"
              className="w-full h-[400px]"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
