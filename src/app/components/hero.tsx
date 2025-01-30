"use client";
import Image from "next/image";
import { Images } from "../images/image";
import { BiSearch, BiSolidDownArrow } from "react-icons/bi";

// this is the header section component
export default function Herosection() {
  return (
    <div className=" text-center ">
      <div className="text-lg dark:text-gray-500 text-gray-900 mb-2 uppercase">
        Non fungible tokens
      </div>
      <div className="text-[130px] h-64 text-wrap font-bold font-sans leading-8 ">
        A new NFT
        <Image
          src={Images.logo}
          alt="logo"
          width={200}
          className="inline bg-transparent dark:mix-blend-lighten"
        />
        Experience
      </div>
      <div className="text-xl dark:text-gray-500 text-gray-900 mt-2 ">
        Discover, collect and sell
      </div>

      <div className="bg-white border-2 border-indigo-700 dark:border-none w-[600px] h-[70px] rounded-xl my-10 mx-auto py-6 px-4 text-justify">
        <input
          type="text"
          placeholder="Items, collections and creators"
          className="w-[50%] outline-none bg-white text-black tracking-wider"
        />
        <span className="border-l-2 float-right  px-2 text-indigo-900">
          Category <BiSolidDownArrow className="inline mx-8 text-gray-400" />{" "}
          <BiSearch className="inline mx-4 text-indigo-700 text-2xl" />
        </span>
      </div>

      {/* these are the brand logos in this section */}
      <div className="flex flex-row mx-auto gap-16 justify-center my-10 mt-[150px]">
        <Image
          src={Images.addidas}
          alt="addidas"
          width={60}
          className=" dark:mix-blend-lighten "
        />
        <Image
          src={Images.nike}
          alt="nike"
          width={60}
          className=" dark:mix-blend-lighten"
        />
        <Image
          src={Images.newholland}
          alt="newholland"
          width={60}
          className=" dark:mix-blend-lighten"
        />
      </div>
    </div>
  );
}
