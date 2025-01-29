'use client';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from '../images/image';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { BsClock } from 'react-icons/bs';
import React from "react";
import { BsHeartFill,BsHeart } from 'react-icons/bs';
const Auction_details = [
    {
        id: 1,
        src: Images.art1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        alt: "art1",
        price: "101ETH",
        bidding: "101 people are bidding",
        time: "22:59 mins left",
        likes: 54
    },
    {
        id: 2,
        src: Images.art2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        alt: "art2",
        price: "101ETH",
        bidding: "101 people are bidding",
        time: "22:59 mins left",
        likes: 54
    },
    {
        id: 3,
        src: Images.art3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        alt: "art3",
        price: "101ETH",
        bidding: "101 people are bidding",
        time: "22:59 mins left",
        likes: 54
    },
    {
        id: 4,
        src: Images.art4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        alt: "art4",
        price: "101ETH",
        bidding: "101 people are bidding",
        time: "22:59 mins left",
        likes: 54
    },
    {
        id: 5,
        src: Images.art2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        alt: "art2",
        price: "101ETH",
        bidding: "101 people are bidding",
        time: "22:59 mins left",
        likes: 54
    },
    {
        id: 6,
        src: Images.art1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        alt: "art1",
        price: "101ETH",
        bidding: "101 people are bidding",
        time: "22:59 mins left",
        likes: 54
    }
]

interface Nftcardprops{
    src: string | StaticImport;
    desc: string;
    alt: string;
    price: string;
    bidding: string;
    time: string;
    likes: number;
    liked: true|false
}

export const Nftcard: React.FC<Nftcardprops>= ({src,desc,alt,price,bidding,time,likes,liked}) => {
    return(
        <div className='rounded-2xl h-max w-[370px] bg-black bg-opacity-75 p-4 my-8 '>
            <Image src={src} className='rounded-xl w-full h-[450px]' alt={alt}></Image>
            <div className='text-[16px]  flex flex-row justify-between gap-6 items-center my-4'>
                <h1 className='text-white font-bold  text-left'>{desc}</h1>
                <div className='bg-indigo-950 text-purple-600 p-2 font-bold rounded-lg'>{price}</div>
            </div>
            
            <div className=' text-left mb-4 text-sm'>
                <BsClock className='inline'/> {time}
            </div>
            <hr className=' mb-4'/>
            <div className='text-left text-[16px] flex flex-row items-center gap-2 text-gray-500'>
                <div className='flex -space-x-4'>
                <Image src={Images.avatar}
                    alt='user avatar' width={48} height={48} className='w-8 h-8 rounded-full border-2 border-black'
              />
              <Image src={Images.avatar}
                    alt='user avatar' width={48} height={48}  className=' w-8 h-8 rounded-full border-2 border-black'
              />
              <Image src={Images.avatar}
                    alt='user avatar' width={48} height={48}  className='w-8 h-8 rounded-full border-2 border-black'
              />
              <Image src={Images.avatar}
                    alt='user avatar' width={48} height={48}  className='w-8 h-8 rounded-full border-2 border-black'
              />
              </div>
                {bidding}
                {liked? 
                <span className='ml-6'><BsHeartFill className='inline text-red-500'/> {likes}</span> : <span className='ml-6'><BsHeart className='inline'/> {likes}</span>
                }
                
            </div>
        </div>
    )
};

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

export default function Auctions(){
    return(
        <div className="w-full text-center" id="auctions">
            <h1 className="font-sans font-bold text-white lg:text-[50px] sm:text-[30px] mt-36 ">Latest live auctions</h1>
        
        
            <div className="slider-container">
              <Slider {...settings}>
                {Auction_details.map((item) => (
                <Nftcard key={item.id} src={item.src} alt={item.alt} desc={item.description} price={item.price} 
                time={item.time} bidding={item.bidding} likes={item.likes} liked={item.id%2 === 0? true: false}/>
            ))
                    
                }
              </Slider>
            </div>
        </div>
        
        
        
    )
}