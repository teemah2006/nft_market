"use client";
import { Auction_details } from "../components/auction";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import BidChart from "../components/bidChart";
import { Nftcard } from "../components/nftCard";
import GoBack from "../components/back";
import { useRouter } from "next/navigation";
export default function Details() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  //   const src = searchParams.get("src");
  const title = searchParams.get("title");
  const author = searchParams.get("author");
  const price = searchParams.get("price");
  const time = searchParams.get("time");
  const bidding = searchParams.get("bid");
  const alt = searchParams.get("alt");
  const description = searchParams.get("description");

  const router = useRouter();

  if (!id) return <p>Loading...</p>;

  return (
    <div>
      <GoBack />
      <div className="flex dark:bg-black bg-white w-[80%] gap-10 dark:text-white rounded-lg shadow-lg p-6 mx-auto">
        <div className="w-1/2 pr-4">
          <Image
            src={Auction_details[parseInt(id)].src}
            alt={`${alt}`}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="dark:text-gray-400 text-gray-800 text-sm mt-2">
              {description}
            </p>

            {/* Creator & Collection */}
            <div className="flex items-center gap-4 mt-4 text-sm dark:text-gray-300 text-gray-800">
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
            <div className="dark:bg-gray-900 bg-gray-300 p-4 rounded-lg mt-6">
              <div className="flex justify-between">
                <div>
                  <span className="block text-sm dark:text-gray-400 text-gray-800">
                    Current Price
                  </span>
                  <span className="text-2xl font-bold">{price}</span>
                </div>
                <div>
                  <span className="block text-sm dark:text-gray-400 text-gray-800">
                    Time Left
                  </span>
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
            <h3 className="dark:text-gray-300 text-gray-700 text-sm mb-2">
              History of Bids ({bidding})
            </h3>
            <BidChart />
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-16 mb-16">
        <h1 className="font-sans font-medium dark:text-white lg:text-[40px] sm:text-[20px] mt-36 ">
          More from this author
        </h1>
        <div className="grid grid-cols-3 justify-between gap-4">
          {Auction_details.filter(
            (item) =>
              item.author.trim().toLowerCase() === author?.trim().toLowerCase()
          ).map((item) => (
            <div
              key={item.id}
              onClick={() => {
                router.push(`/artDetails?id=${
                  item.id
                }&src=${"/art4.jpeg"}&title=${item.title}&description=${
                  item.description
                }&alt=${item.alt}&author=${item.author}
                  &price=${item.price}&time=${item.time}&bid=${
                  item.bidding
                }&liked=${item.id % 2 === 0 ? true : false}`);
              }}
              style={{ cursor: "pointer" }}
            >
              <Nftcard
              id={item.id}
              title={item.title}
                key={item.id}
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
        <button className="lg:text-[17px] text-[16px] dark:text-gray-400 text-gray-700 border-2 border-gray-500 w-[30%] justify-self-center  rounded-xl p-4 font-bold ">
          Show me more
        </button>
      </div>
    </div>
  );
}
