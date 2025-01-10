import BitcoinInfo from "./components/bitcoin-info";
import BitcoinTracker from "./components/bitcoin-price-tracker";
import CryptoCarousel from "./components/crypto-carousel";
import { Fundamentals } from "./components/fundamentals";
import GetStarted from "./components/get-started";
import Navbar from "./components/Navbar";
import { Navigation } from "./components/navigation";
import { Performance } from "./components/performance";
import Tokenomics from "./components/tokenomics";
import TrendingCoins from "./components/trending-coins";

const App = () => {
  return (
    <div className="bg-[#D3e0e6]">
      <Navbar />
      <div className="flex">
        <BitcoinTracker />
        <div className="flex flex-col space-y-6 mr-8">
          <GetStarted />
          <TrendingCoins />
        </div>
      </div>

      <div className="max-w-[66.5rem] mx-4 rounded-xl bg-white px-4 py-8">
        <Navigation />
        <div className="space-y-8 mt-8">
          <Performance />
          <Fundamentals />
        </div>
      </div>
      <BitcoinInfo />
      <Tokenomics />
      <div className="container   bg-white mt-6">
        <CryptoCarousel />
      </div>
    </div>
  );
};

export default App;
