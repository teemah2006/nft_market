"use client";
import { Auction_details } from "../components/auction";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import BidChart from "../components/bidChart";
import { Nftcard } from "../components/live_auctions";
import GoBack from "../components/back";
export default function Details() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const src = searchParams.get("src");
  const title = searchParams.get("title");
  const author = searchParams.get("author");
  const price = searchParams.get("price");
  const time = searchParams.get("time");
  const bidding = searchParams.get("bid");
  const alt = searchParams.get("alt");
  const description = searchParams.get("description")

  if (!id) return <p>Loading...</p>;

  return (
    <div>
        <GoBack/>
    <div className="flex bg-black w-[80%] gap-10 text-white rounded-lg shadow-lg p-6 mx-auto">
      <div className="w-1/2 pr-4">
        <Image
          src={`${src}`} 
          alt={`${alt}`}
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-400 text-sm mt-2">
           {description}
          </p>

          {/* Creator & Collection */}
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
            <div>
              <span className="block font-bold">Creator</span>
              <span>@{author}</span>
            </div>
            <div>
              <span className="block font-bold">Collection</span>
              <span>NFT art</span>
            </div>
          </div>

          {/* Pricing & Countdown */}
          <div className="bg-gray-900 p-4 rounded-lg mt-6">
            <div className="flex justify-between">
              <div>
                <span className="block text-sm text-gray-400">Current Price</span>
                <span className="text-2xl font-bold">{price}</span>
              </div>
              <div>
                <span className="block text-sm text-gray-400">Time Left</span>
                <span className="text-xl font-bold">{time}</span>
              </div>
            </div>
            <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-500 transition text-white text-lg font-bold py-3 rounded-lg">
          Place a bid
        </button>
          </div>
        </div>
        {/* Bid Chart */}
        <div className="mt-4">
            <h3 className="text-gray-300 text-sm mb-2">History of Bids ({bidding})</h3>
            <BidChart />
          </div>
        </div>
    </div>
    <div className="w-full text-center mt-16 mb-16">
        <h1 className="font-sans font-medium text-white lg:text-[40px] sm:text-[20px] mt-36 ">More from this author</h1>
        <div className="grid grid-cols-3 justify-between gap-4">
        {Auction_details.map((item) => (
            item.author.trim().toLowerCase() === author?.trim().toLowerCase()?
                <Nftcard key={item.id} src={item.src} alt={item.alt} author={item.author} desc={item.title} price={item.price} 
                time={item.time} bidding={item.bidding} likes={item.likes} liked={item.id%2 === 0? true: false} avatar={false}/>
                : null
                
            ))
                    
        }
        
        </div>
        <button className="lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500 w-[30%] justify-self-center  rounded-xl p-4 font-bold ">Show me more</button>

    </div>
    </div>
  );
};

    // <div className="rounded-xl border itmes-center dark:border-gray-500 border-gray-900 w-[90%] backdrop-blur-lg backdrop-grayscale p-6 grid grid-cols-2 gap-8 h-max justify-self-center bg-transparent">
    //   <div className="">
    //     <Image src={`${src}`} alt= {`${alt}`} width={600} height={600} className="w-full object-cover rounded-xl"/>
    //   </div>
    //   <div>
    //   <p className="text-[20px] lg:text-[30px] font-bold">{title}</p>
    //   </div>
      
    // </div>
  
