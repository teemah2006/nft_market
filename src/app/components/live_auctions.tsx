"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "../images/image";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { BsClock } from "react-icons/bs";
import React from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { Auction_details } from "./auction";
import { useRouter } from "next/navigation";

interface Nftcardprops {
  src: string | StaticImport;
  desc: string;
  alt: string;
  price: string;
  bidding: string;
  time: string;
  likes: number;
  liked: true | false;
  avatar: true | false;
  author: string;
}

export const Nftcard: React.FC<Nftcardprops> = ({
  src,
  desc,
  alt,
  price,
  bidding,
  time,
  likes,
  liked,
  avatar,
  author,
}) => {
  return (
    <div className="rounded-2xl h-min lg:h-max w-auto dark:bg-black bg-white shadow-lg bg-opacity-50 p-4 my-8 mx-4 overflow-hidden">
      <Image
        src={src}
        className="rounded-xl w-full h-[400px]"
        alt={alt}
        height={900}
        width={900}
        loading="lazy"
      />

      <div className="text-[16px]  flex flex-row flex-wrap justify-between gap-6 items-center my-4">
        <h1 className=" font-medium text-[1rem]  text-left w-[70%]">
          {desc} <span className="hidden">{author}</span>
        </h1>
        <div className="bg-indigo-950 text-purple-600 p-2 font-bold rounded-lg">
          {price}
        </div>
      </div>

      <div className=" text-left mb-4 text-sm">
        <BsClock className="inline" /> {time}
      </div>
      <hr className=" mb-4" />
      <div className="text-left text-[16px] flex flex-row items-center gap-2 dark:text-gray-500 text-gray-800">
        {avatar ? (
          <div className="flex -space-x-4">
            <Image
              src={Images.avatar}
              loading="lazy"
              alt="user avatar"
              width={48}
              height={48}
              className="w-8 h-8 rounded-full border-2 border-black"
            />
            <Image
              src={Images.avatar}
              loading="lazy"
              alt="user avatar"
              width={48}
              height={48}
              className=" w-8 h-8 rounded-full border-2 border-black"
            />
            <Image
              src={Images.avatar}
              loading="lazy"
              alt="user avatar"
              width={48}
              height={48}
              className="w-8 h-8 rounded-full border-2 border-black"
            />
            <Image
              src={Images.avatar}
              loading="lazy"
              alt="user avatar"
              width={48}
              height={48}
              className="w-8 h-8 rounded-full border-2 border-black"
            />
          </div>
        ) : null}

        {bidding}
        {liked ? (
          <span className="ml-6">
            <BsHeartFill className="inline text-red-500" /> {likes}
          </span>
        ) : (
          <span className="ml-6">
            <BsHeart className="inline" /> {likes}
          </span>
        )}
      </div>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

export default function Auctions() {
  const router = useRouter();
  return (
    <div className="w-full text-center" id="auctions">
      <h1 className="font-sans font-bold dark:text-white lg:text-[50px] sm:text-[30px] mt-36 ">
        Latest live auctions
      </h1>

      <div className="slider-container">
        <Slider {...settings}>
          {Auction_details.map((item) => (
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
