import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GetStarted() {
  return (
    <div className="flex flex-col items-center text-center p-8 md:p-12 bg-[#0052FE] text-white rounded-2xl max-w-xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Get Started with KoinX for FREE
      </h2>
      <p className="text-base md:text-lg mb-8 max-w-md">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>

      <div className="relative w-48 h-48 mb-8">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3GkdHgNutd7fy61avBbvFoBkaRoIo8.png"
          alt="Illustration of document interaction"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      <Button variant="secondary" size="lg" className="font-semibold">
        Get Started for FREE
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
}
