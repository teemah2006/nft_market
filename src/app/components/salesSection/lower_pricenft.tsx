"use client";
import { Lowernft_details } from "../lowerpricenft";
import Image from "next/image";
import { BsClock, BsHeartFill, BsHeart } from "react-icons/bs";
import { useRouter } from "next/navigation";
export default function LowerPricenft() {
  const router = useRouter();
  return (
    <div className="rounded-2xl h-auto w-1/3 dark:bg-black bg-white bg-opacity-75 p-6 my-8 box-border border dark:border-gray-500 border-gray-900">
      <h1 className="font-sans font-medium  lg:text-[40px] sm:text-[20px] ">
        Top NFT at a lower price
      </h1>
      {Lowernft_details.map((item) => (
        <div
          className="grid grid-cols-3 auto-cols-auto gap-4 my-6"
          key={item.id}
          onClick={() => {
            router.push(`/artDetails?id=${item.id}&src=${"/art4.jpeg"}&title=${
              item.title
            }&description=${item.description}&alt=${item.alt}&author=${
              item.author
            }
                  &price=${item.price}&time=${item.time}&bid=${
              item.bidding
            }&liked=${item.id % 2 === 0 ? true : false}`);
          }}
          style={{ cursor: "pointer" }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={100}
            height={100}
            className="rounded-xl w-[100px] h-[100px]"
          />
          <div className="col-span-2">
            <h1 className="dark:text-white font-medium text-[16px]  text-left  mb-2">
              {item.title}
            </h1>
            <div className="mb-4">
              <span className=" text-left text-sm">
                <BsClock className="inline" /> {item.time}
              </span>
              <span className="bg-indigo-950 p-1 float-right text-purple-600 font-bold align-middle">
                {item.price}
              </span>
            </div>

            <span className="dark:text-gray-500 text-gray-800 text-sm">
              {item.bidding}
            </span>
            {item.id % 2 === 0 ? (
              <span className="ml-6">
                <BsHeartFill className="inline text-red-500" /> {item.likes}
              </span>
            ) : (
              <span className="ml-6">
                <BsHeart className="inline" /> {item.likes}
              </span>
            )}
          </div>
        </div>
      ))}
      <button className=" lg:text-[17px] text-[16px] dark:text-gray-400 text-gray-800 border-2 border-gray-500 w-[100%] mt-12  rounded-xl p-4 font-bold ">
        Show me more
      </button>
    </div>
  );
}
