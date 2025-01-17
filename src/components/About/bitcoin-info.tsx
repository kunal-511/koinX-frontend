import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BitcoinInfo() {
  return (
    <div className="w-full max-w-[67.5rem]  px-4 md:px-6 py-4 md:py-6 space-y-6 md:space-y-8 bg-white mt-6 rounded-lg">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">About Bitcoin</h2>

        <div className="space-y-3 md:space-y-4">
          <h3 className="text-lg md:text-xl font-bold">What is Bitcoin?</h3>
          <p className=" md:text-base text-[#3E424A]">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>
        <div className="w-full h-[1px] bg-gray-300 " />
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-lg md:text-xl font-bold">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="md:text-base text-[#3E424A]">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus.
          </p>
          <p className="md:text-base text-[#3E424A]">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phaselius. Integer pellentesque
            enim convallis ultricies at.
          </p>
          <p className="md:text-base text-[#3E424A]">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultricies tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      </section>
      <div className="w-full h-[1px] bg-gray-300 " />

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">
          Already Holding Bitcoin?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-custom-green-blue text-white w-full">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <img
                  src="https://s3-alpha-sig.figma.com/img/4a59/7cf5/e39cee97d83ba894aa0c105133924b9b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BIpcdewbeHvpF0MrAHY9Lvoj0pca~n77kDxgd55mI~LL6DhUVkQkiHr5pBEMM7AtTgJ3r50AD5rDtCXdoDGT56v03G1oM0r4wyjQQsqlRn7plrafv4xMISOsNszaNThUXSJrUlWt~XLXr7r86YIkB5PwI3lVDyklbGy~48E2qc86bk25uWBfyp2yk-BGZORYlvmG4DNJRnQ8qtcIJ8nj1kxPzIKT4O676Cdkfd09WRDGFQLhBevRjdipHN7UW6y1LZz651u9k7qWHX-nCLWNBhpwzx4i0aH4FddzREaKCwnmK~DAkruz1qAfUnsFZLCClIobUtEFP58DdJkB8Iyc1A__"
                  alt="Calculate your Profits"
                  className="rounded-lg h-24 w-24 sm:h-36 sm:w-36 object-cover"
                />
                <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-10 flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-center sm:text-left">
                    Calculate your Profits
                  </h3>
                  <Button
                    variant="secondary"
                    className="w-full sm:w-3/4 justify-between"
                  >
                    Check Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-custom-gradient text-white w-full">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <img
                  src="https://s3-alpha-sig.figma.com/img/b324/e6e3/5c577ca47c764bd8af01d840fe7ffccb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d4l6utWlIkrTQzqt77v9j0~gF~vbeJRrczq6KNeIyXwZT~GK~Lf~qi4wM95eBzMG3moI5HEb268uf2MKQuKUD6wweZBgLLHTk6QZsDSs8nG7Nz7CiR-h5Iw79zDhEU19rKCbLW~hJ1zjAjS0~-knfUlYgUq6TKJUUkaU0x3gNR0JFYjAUFYU5mGq~tfgaFpijbiNjl5z4AC4OllIoyuSrVGxTQu6~FX2-Fuzr8K3235R65bN7rlrzduhg6fIoYkkdy4zWD2~fnmekMZ5soQX0Vk~S3eDEs8YmPn5A6xFzi~MiO53Xe2K6bBVVtGA-eY-urXUeeYJHhrTlxAmvlSIyA__"
                  alt="Calculate your tax liability"
                  className="rounded-lg h-24 w-24 sm:h-36 sm:w-36 object-cover"
                />
                <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-12 flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-center sm:text-left">
                    Calculate your tax liability
                  </h3>
                  <Button
                    variant="secondary"
                    className="w-full sm:w-2/3 justify-between"
                  >
                    Check Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full h-[1px] bg-gray-300 " />

        <p className="md:text-base text-[#3E424A] mt-4">
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
