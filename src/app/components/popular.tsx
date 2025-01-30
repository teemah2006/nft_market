"use client";
import { Popularauction_details } from "./popular_auctions";
import { Nftcard } from "./nftCard";

// the popular auctions component
export default function Popular_auctions() {

  return (
    <div className="mt-36 text-center">
      <h1 className="font-sans font-bold dark:text-white lg:text-[50px] sm:text-[30px] mb-10 ">
        Most popular live auctions
      </h1>
      <div className="my-10">
        <span className="lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500  rounded-xl p-2 mx-6">
          Architecture
        </span>
        <span className="lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-400  rounded-xl p-2 mx-6">
          Photography
        </span>
        <span className="lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500  rounded-xl p-2 mx-6">
          Games
        </span>
        <span className="lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500  rounded-xl p-2 mx-6">
          Music
        </span>
      </div>
      <div className="grid grid-cols-4  justify-between">
        {/* looping through the nft items data for display */}
        {Popularauction_details.map((item) => (
          <div
            key={item.id}
          >
            <Nftcard
              title={item.title}
              id={item.id}
              src={item.src}
              alt={item.alt}
              author={item.author}
              desc={item.title}
              price={item.price}
              time={item.time}
              bidding={item.bidding}
              likes={item.likes}
              liked={item.id % 2 === 0 ? true : false}
              avatar={false}
            />
          </div>
        ))}
      </div>
      <button className=" lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500  rounded-xl p-4 font-bold ">
        Show me more
      </button>
    </div>
  );
}
