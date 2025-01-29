'use client';
import Image from "next/image";
import { Images } from "@/app/images/image";

export default function SellCreate(){
    return(
        
        <div className="rounded-2xl h-min lg:h-auto w-1/3 bg-gray-900 p-4 my-8 box-border">
            <div className="relative rounded-xl -top-[2.5rem] pl-4 text-gray-500 bg-gray-900 w-1/3 h-[50px] -left-[1rem] skew-x-10 font-extrabold text-left tracking-wider">
                . . . 
            </div>
            
            <Image className="relative saturate-50 mix-blend-lighten opacity-75 h-[80%] w-[85%] -top-[7.5rem]"
             style={{transform:"rotate(200deg)"}} src="/hand.avif" alt="hand" width={1000} height={1000} />

            <h1 className="font-serif lg:text-[30px] relative -top-[8.5rem]">
                Get started creating & selling your NFTs
            </h1>
            <p className="text-gray-500 text-lg -top-[7.5rem] relative">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat deleniti quam </p>
            <button className=" lg:text-[17px] text-[16px] text-white bg-indigo-800 -top-[6rem] relative w-[100%] rounded-xl px-4 py-2 font-bold">Get started</button>
        </div>

  
        
    )
}