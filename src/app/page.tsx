import Herosection from "./components/hero";
import Auctions from "./components/live_auctions";
import Overline from "./components/overline";
import Salesection from "./components/salesSection/main";
import { Overline2 } from "./components/overline";
import Popular_auctions from "./components/popular";
import { Data } from "./components/counts";
import Authors from "./components/authors";
import ArtDisplay from "./components/artDisplay";
export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Herosection />
      <Auctions />
      <Overline />
      <Salesection />
      <Overline2 />
      <Popular_auctions />
      <Data />
      <Authors />
      <ArtDisplay />
    </div>
  );
}
