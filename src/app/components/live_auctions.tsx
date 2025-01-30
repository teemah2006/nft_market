"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Auction_details } from "./auction";
import { Nftcard } from "./nftCard";



// setting the carousel settings
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};


// Live auction component
export default function Auctions() {
  
  return (
    <div className="w-full text-center" id="auctions">
      <h1 className="font-sans font-bold dark:text-white lg:text-[50px] sm:text-[30px] mt-36 ">
        Latest live auctions
      </h1>

      <div className="slider-container">
        <Slider {...settings}>
          {/* looping through nft items to create the card layout */}
          {Auction_details.map((item) => (
            <div
              key={item.id}
              
            >
              <Nftcard
              id={item.id}
              title={item.title}
                key={item.id}
                src={item.src}
                alt={item.alt}
                desc={item.title}
                author={item.author}
                price={item.price}
                time={item.time}
                bidding={item.bidding}
                likes={item.likes}
                liked={item.id % 2 === 0 ? true : false}
                avatar
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
