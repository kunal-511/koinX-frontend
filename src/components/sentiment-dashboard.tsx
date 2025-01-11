"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "./progress";
import { InfoIcon as InfoCircle, FileText, TrendingUp } from "lucide-react";

export default function SentimentDashboard() {
  const keyEvents = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra.",
    },
  ];

  const analystEstimates = {
    buy: 76,
    hold: 8,
    sell: 16,
  };

  return (
    <div className="w-full max-w-[68rem] mt-6 bg-white rounded-lg p-4 space-y-8">
      {/* Key Events Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Key Events</h2>
          <InfoCircle className="w-4 h-4 text-gray-400" />
        </div>

        <div className="w-full overflow-hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {keyEvents.map((event, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <Card className="bg-gradient-to-br from-white to-gray-50/50">
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
          <InfoCircle className="w-4 h-4 text-gray-400" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Circular Progress */}
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-100 stroke-current"
                strokeWidth="10"
                fill="transparent"
                r="45"
                cx="50"
                cy="50"
              />
              <circle
                className="text-emerald-500 stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                fill="transparent"
                r="45"
                cx="50"
                cy="50"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${
                  2 * Math.PI * 45 * (1 - analystEstimates.buy / 100)
                }`}
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-emerald-500">
                {analystEstimates.buy}
                <span className="text-xl">%</span>
              </span>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="flex-1 w-full space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Buy</span>
                <span>{analystEstimates.buy}%</span>
              </div>
              <Progress
                value={analystEstimates.buy}
                className="h-2 bg-gray-100"
                indicatorClassName="bg-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Hold</span>
                <span>{analystEstimates.hold}%</span>
              </div>
              <Progress
                value={analystEstimates.hold}
                className="h-2 bg-gray-100"
                indicatorClassName="bg-gray-300"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Sell</span>
                <span>{analystEstimates.sell}%</span>
              </div>
              <Progress
                value={analystEstimates.sell}
                className="h-2 bg-gray-100"
                indicatorClassName="bg-red-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
