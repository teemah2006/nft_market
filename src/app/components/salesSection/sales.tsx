'use client';
import { Offer_details } from "../offers";
import { Nftcard } from "../live_auctions";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };

export default function Sales(){
    return(
        <div className="rounded-2xl h-min w-1/3 bg-black bg-opacity-75 p-4 my-8 box-border border border-gray-500">
            <h1 className="font-sans font-medium text-white lg:text-[40px] sm:text-[20px] ">Check out the hottest sale offers</h1>
            <div className="slider-container">
              <Slider {...settings}>
                {Offer_details.map((item) => (
                <Nftcard key={item.id} src={item.src} alt={item.alt} author={item.author} desc={item.description} price={item.price} 
                time={item.time} bidding={item.bidding} likes={item.likes} liked={item.id%2 === 0? true: false} avatar={false}/>
            ))
                    
                }
              </Slider>
            </div>
            <button className=" lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500 w-[100%]  rounded-xl p-4 font-bold ">Show me more</button>
        </div>
    )
}