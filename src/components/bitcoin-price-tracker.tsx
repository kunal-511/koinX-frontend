import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useEffect, useRef } from "react";
import { PriceDisplay } from "./price-display";

// TradingView types remain the same
declare global {
  interface Window {
    TradingView: {
      widget: new (config: TradingViewConfig) => unknown;
    };
  }
}

interface TradingViewConfig {
  container_id: string;
  symbol: string;
  interval: string;
  timezone: string;
  theme: string;
  style: string;
  toolbar_bg: string;
  enable_publishing: boolean;
  hide_top_toolbar: boolean;
  hide_legend: boolean;
  save_image: boolean;
  height: number;
  width: string;
  backgroundColor: string;
  gridColor: string;
  time_frames: Array<{
    text: string;
    resolution: string;
  }>;
}

export default function BitcoinTracker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (window.TradingView && containerRef.current) {
        new window.TradingView.widget({
          container_id: "tradingview-widget",
          symbol: "BITSTAMP:BTCUSD",
          interval: "D",
          timezone: "exchange",
          theme: "light",
          style: "3", // Changed to line chart style
          toolbar_bg: "#ffffff",
          enable_publishing: false,
          hide_top_toolbar: true, // Hide top toolbar for cleaner look
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
    <div className="w-full max-w-6xl mx-auto px-4 py-2 h-full ">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <span>Cryptocurrencies</span>
        <MdOutlineKeyboardDoubleArrowRight className="h-4 w-4" />
        <span className="text-foreground">Bitcoin</span>
      </nav>

      <Card className="shadow-none border-0 sm:border">
        <CardHeader className="space-y-4 p-0 sm:p-6">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold">Bitcoin</h1>
              <span className="text-xl text-muted-foreground">BTC</span>
            </div>
            <Badge variant="secondary" className="h-6">
              Rank #1
            </Badge>
          </div>

          <PriceDisplay />
        </CardHeader>

        <CardContent className="p-0 sm:p-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold px-4 sm:px-0">
              Bitcoin Price Chart (USD)
            </h2>

            <Tabs defaultValue="7D" className="w-full">
              <TabsList className="w-full h-auto flex justify-start gap-2 p-2 bg-transparent mb-4 overflow-x-auto">
                {["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"].map(
                  (period) => (
                    <TabsTrigger
                      key={period}
                      value={period}
                      className="px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {period}
                    </TabsTrigger>
                  )
                )}
              </TabsList>
            </Tabs>

            <div className="w-full h-[400px] relative">
              <div
                ref={containerRef}
                id="tradingview-widget"
                className="w-full h-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
