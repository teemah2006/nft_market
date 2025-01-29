'use client';
import { Images } from "../images/image";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Artworks = [
    {
        src: Images.artwork1,
        eth: '2.29 ETH',
        alt: 'Artwork 1'
    },
    {
        src: Images.artwork2,
        eth: '2.29 ETH',
        alt: 'Artwork 2'
    },
    {
        src: Images.artwork3,
        eth: '2.29 ETH',
        alt: 'Artwork 3'
    },
    {
        src: Images.artwork4,
        eth: '2.29 ETH',
        alt: 'Artwork 4'
    },
    {
        src: Images.artwork1,
        eth: '2.29 ETH',
        alt: 'Artwork 1'
    },
    {
        src: Images.artwork1,
        eth: '2.29 ETH',
        alt: 'Artwork 1'
    },
    {
        src: Images.artwork2,
        eth: '2.29 ETH',
        alt: 'Artwork 2'
    },
    {
        src: Images.artwork3,
        eth: '2.29 ETH',
        alt: 'Artwork 3'
    },
    {
        src: Images.artwork4,
        eth: '2.29 ETH',
        alt: 'Artwork 4'
    },
    {
        src: Images.artwork1,
        eth: '2.29 ETH',
        alt: 'Artwork 1'
    }


]

export default function ArtDisplay(){
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              autoplaySpeed: 1500,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              autoplaySpeed: 1600,
            },
          },
        ]
      };
      return(
        <div className='overflow-hidden'>
        <div className=' max-w-[1200px] mx-auto py-6 '>
            
            <Slider {...settings}>
        {Artworks.map((item, index) => (
            <div key={index} className='w-full  lg:opacity-50 hover:opacity-100 mt-3 text-center   '>
                <Image src={item.src} alt={item.alt}  width={100} height={100} className="rounded-xl w-[100px] h-[100px] mx-auto my-4"/>
                <p>{item.eth}</p>
            </div>
        ))}
      </Slider>
        </div>
        </div>
      )
}