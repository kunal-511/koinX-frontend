import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "./progress";

export default function SentimentDashboard() {
  const keyEvents = [
    {
      icon: <img src="news.svg" className="w-12 h-12 " />,
      title:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra.",
    },
    {
      icon: <img src="increase.svg" className="w-12 h-12 " />,
      title:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra. consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra.",
    },
  ];

  const analystEstimates = {
    buy: 76,
    hold: 8,
    sell: 16,
  };

  function cn(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="w-full max-w-[68rem] mt-6 bg-white rounded-lg p-4 space-y-8">
      {/* Key Events Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Key Events</h2>
          <img
            src="info-tip.svg"
            alt="info-tip"
            className="hover:cursor-pointer"
          />
        </div>

        <div className="w-full overflow-hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {keyEvents.map((event, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <Card
                    className={`${
                      index === 0 ? "bg-custom-blue" : "bg-custom-green"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="shrink-0">{event.icon}</div>
                        <div className="space-y-2">
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-gray-600">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-end gap-2 mt-4">
              <CarouselPrevious className="position-static" />
              <CarouselNext className="position-static" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Analyst Estimates</h2>
          <img
            src="info-tip.svg"
            alt="info-tip"
            className="hover:cursor-pointer"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Circular Progress */}
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 flex items-center bg-custom-green rounded-full justify-center">
              <span className="text-4xl font-bold text-emerald-500">
                {analystEstimates.buy}
                <span className="text-xl">%</span>
              </span>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="flex-1 w-full space-y-4">
            {Object.entries(analystEstimates).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <span className="w-10 capitalize">{key}</span>
                <div className="relative flex-1 h-2">
                  <Progress
                    value={value}
                    className="bg-transparent"
                    indicatorClassName={cn(
                      key === "buy" && "bg-emerald-500",
                      key === "hold" && "bg-gray-300",
                      key === "sell" && "bg-red-500"
                    )}
                  />
                  <span
                    className="absolute top-1/2 -translate-y-1/2 text-[0.8rem] ml-5 "
                    style={{
                      left: `${value}%`,
                      transform: `translateX(-50%) translateY(-50%)`,
                    }}
                  >
                    {value}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
