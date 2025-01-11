import { useMediaQuery } from "react-responsive";
import BitcoinInfo from "./components/About/bitcoin-info";
import BitcoinTracker from "./components/Bitcoin Price/bitcoin-price-tracker";
import CryptoCarousel from "./components/Coins Carousel/crypto-carousel";
import { Fundamentals } from "./components/Overview/fundamentals";
import GetStarted from "./components/Get Started/get-started";
import Navbar from "./components/Navbar/Navbar";
import { Navigation } from "./components/Overview/navigation";
import { Performance } from "./components/Overview/performance";
import SentimentDashboard from "./components/Sentiments/sentiment-dashboard";
import TeamSection from "./components/Team/team-section";
import Tokenomics from "./components/Tokenomics/tokenomics";
import TrendingCoins from "./components/Trending Coins/trending-coins";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="bg-[#eff2f5]">
      <Navbar />

      <div className="px-4">
        <div className="flex flex-col md:flex-row gap-4 h-full">
          <BitcoinTracker />
          {!isMobile && (
            <div className="flex flex-col space-y-6">
              <GetStarted />
              <TrendingCoins />
            </div>
          )}
        </div>
        <div className="min-h-screen max-w-[67.5rem] rounded-lg bg-white mt-6 px-6">
          <div className="max-w-5xl py-4 md:py-8 overflow-hidden">
            <Navigation />
            <div className="space-y-6 md:space-y-8 mt-6 md:mt-8">
              <Performance />
              <Fundamentals />
            </div>
          </div>
        </div>
        <SentimentDashboard />
        <BitcoinInfo />
        {!isMobile && <Tokenomics />}
        <TeamSection />
      </div>
      <div className="container p-6 px-12 bg-white my-6">
        <CryptoCarousel />
      </div>
      {isMobile && (
        <div className="mt-6 space-y-6">
          <GetStarted />
          <TrendingCoins />
        </div>
      )}
    </div>
  );
};

export default App;
