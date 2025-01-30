"use client";
import { Offer_details } from "../offers";
import { Nftcard } from "../nftCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { useRouter } from "next/navigation";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1.5,
  slidesToScroll: 1,
};

// sales component
export default function Sales() {
  const router = useRouter();
  return (
    <div className="rounded-2xl h-min w-1/3 dark:bg-black bg-white bg-opacity-75 p-4 my-8 box-border border dark:border-gray-500 border-gray-700">
      <h1 className="font-sans font-bold  lg:text-[40px] sm:text-[20px] ">
        Check out the hottest sale offers
      </h1>
      <div className="slider-container">
        <Slider {...settings}>
          {Offer_details.map((item) => (
            <div
              key={item.id}
              
            >
              {/* using the nft card component */}
              <Nftcard
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
                title={item.title}
                id={item.id}
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* show me button */}
      <button className=" lg:text-[17px] text-[16px] dark:text-gray-400 text-gray-900 border-2 dark:border-gray-500 border-gray-900 w-[100%]  rounded-xl p-4 font-bold ">
        Show me more
      </button>
    </div>
  );
}
