import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BitcoinInfo() {
  return (
    <div className="max-w-[66.5rem] mx-4 p-6 space-y-8 bg-white mt-6 rounded-xl">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">About Bitcoin</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">What is Bitcoin?</h3>
          <p className="text-muted-foreground">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus.
          </p>
          <p className="text-muted-foreground">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phaselius. Integer pellentesque
            enim convallis ultricies at.
          </p>
          <p className="text-muted-foreground">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultricies tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Already Holding Bitcoin?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-[#1C2127] text-white">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CYGZJz5g1tiiT8fpybDBh3we8dUyoG.png"
                  alt="Chart showing profits"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">
                  Calculate your Profits
                </h3>
              </div>
              <Button variant="secondary" className="w-full justify-between">
                Check Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#FF6B6B] text-white">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CYGZJz5g1tiiT8fpybDBh3we8dUyoG.png"
                  alt="Calculator showing tax liability"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">
                  Calculate your tax liability
                </h3>
              </div>
              <Button variant="secondary" className="w-full justify-between">
                Check Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
        <p className="text-muted-foreground mt-4">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultricies tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </section>
    </div>
  );
}
