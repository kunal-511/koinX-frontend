import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselProps {
  title: string;
  children: React.ReactNode;
}

export function Carousel({ title, children }: CarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full px-4 md:px-0">
      <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{title}</h2>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {children}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-lg"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
