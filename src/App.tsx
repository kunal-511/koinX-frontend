import BitcoinInfo from "./components/bitcoin-info";
import BitcoinTracker from "./components/bitcoin-price-tracker";
import CryptoCarousel from "./components/crypto-carousel";
import { Fundamentals } from "./components/fundamentals";
import GetStarted from "./components/get-started";
import Navbar from "./components/Navbar";
import { Navigation } from "./components/navigation";
import { Performance } from "./components/performance";
import SentimentDashboard from "./components/sentiment-dashboard";
import TeamSection from "./components/team-section";
import Tokenomics from "./components/tokenomics";
import TrendingCoins from "./components/trending-coins";

const App = () => {
  return (
    <div className="bg-[#D3E0E6] ">
      <Navbar />

      <div className="px-4">
        <div className="flex gap-4 h-full  ">
          <BitcoinTracker />
          <div className="flex flex-col  space-y-6 ">
            <GetStarted />
            <TrendingCoins />
          </div>
        </div>
        <div className="min-h-screen max-w-[68rem] rounded-lg  bg-white mt-6 px-6">
          <div className="max-w-5xl  py-4 md:py-8 overflow-hidden">
            <Navigation />
            <div className="space-y-6 md:space-y-8 mt-6 md:mt-8">
              <Performance />
              <Fundamentals />
            </div>
          </div>
        </div>
        <SentimentDashboard />
        <BitcoinInfo />
        <Tokenomics />
        <TeamSection />
      </div>
      <div className="container p-6  bg-white mt-6">
        <CryptoCarousel />
      </div>
    </div>
  );
};

export default App;
