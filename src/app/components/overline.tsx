'use client';
import Image from "next/image";
import { Images } from "../images/image";
import { RiPaintBrushLine } from "react-icons/ri";
import { PiMathOperationsFill } from "react-icons/pi";
export default function Overline(){
    return(
        <div className="flex lg:flex-row flex-col items-center justify-between p-4 mt-[200px]">
            <div className="w-1/2">
                <small className="text-gray-500 text-[16px] tracking-wide">OVERLINE</small>
                <h1 className="lg:text-[80px] text-[60px] font-bold font-sans my-6">Sapien Ipsum scelerisque convallis fusse </h1>
                <p className="text-gray-500 text-lg lg:text-[18px] my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas adipisci eaque architecto dolorem ipsa,  </p>
                <div className="flex flex-row gap-4 mt-10">
                    <button className=" lg:text-[17px] text-[16px] text-white bg-indigo-800  rounded-xl p-4 font-bold">Get started</button>
                    <button className=" lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500  rounded-xl p-4 font-bold ">Learn more</button>
                </div>
            </div>
            <div>
                <Image src={Images.paint} alt="paint buckets" className=" -rotate-45 bg-transparent"/>
            </div>

        </div>
    )
}

export function Overline2(){
    return(
        <div className="flex lg:flex-row flex-col items-center justify-between p-4 mt-[200px]">
            <div>
                <Image src={Images.emoji} alt="paint buckets" className=" w-[500px] bg-transparent"/>
            </div>
            <div className="w-1/2">
                <small className="text-gray-500 text-[16px] tracking-wide">OVERLINE</small>
                <h1 className="lg:text-[80px] text-[60px] font-bold font-sans my-6">Sapien Ipsum scelerisque convallis fusse </h1>
                <p className="text-gray-500 text-lg lg:text-[18px] my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas adipisci eaque architecto dolorem ipsa,  </p>
                <div className="flex flex-row justify-between">
                <div><RiPaintBrushLine className="text-[40px] "/> <h1 className="lg:text-[20px] text-[15px] font-bold font-sans my-6 leading-4"> Ipsum</h1>
                <p className="text-gray-500 text-lg lg:text-[15px] my-4 leading-4">Lorem ipsum dolor sit amet consectetur</p></div>
                <div><PiMathOperationsFill className="text-[40px] leading-sm"/> <h1 className="lg:text-[20px] text-[15px] font-bold font-sans my-6 leading-4">scelerisque </h1>
                <p className="text-gray-500 text-lg lg:text-[15px] my-4 leading-4">Lorem ipsum dolor sit amet consectetur</p></div>
                </div>
                <div className="flex flex-row gap-4 mt-10">
                    <button className=" lg:text-[17px] text-[16px] text-white bg-indigo-800  rounded-xl p-4 font-bold">Get started</button>
                    <button className=" lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500  rounded-xl p-4 font-bold ">Learn more</button>
                </div>
            </div>
        </div>
    )
}