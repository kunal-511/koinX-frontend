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
    <div>
      <Navbar />
      <div className="flex">
        <BitcoinTracker />
        <GetStarted />
      </div>
      <TrendingCoins />
      <div className="container mx-auto px-4">
        <CryptoCarousel />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Navigation />
        <div className="space-y-8 mt-8">
          <Performance />
          <Fundamentals />
        </div>
      </div>
      <BitcoinInfo />
      <Tokenomics />
    </div>
  );
};

export default App;
