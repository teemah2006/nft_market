"use client";
import { IoPersonCircleSharp } from "react-icons/io5";
import { GiPalette } from "react-icons/gi";
import { TfiGallery } from "react-icons/tfi";
import { IoWalletOutline } from "react-icons/io5";

// creating variables to store current data
const activeUsers = "300k";
const artworks = "52,5k";
const artists = "17,5k";
const ethSpent = "35.58";

// compiling data needed
const Compiled_data = [
  {
    name: "Users active",
    count: activeUsers,
    icon: <IoPersonCircleSharp className="text-[50px] mx-auto my-8" />,
  },
  {
    name: "Artworks",
    count: artworks,
    icon: <TfiGallery className="text-[50px] mx-auto my-8" />,
  },
  {
    name: "Artists",
    count: artists,
    icon: <GiPalette className="text-[50px] mx-auto my-8" />,
  },
  {
    name: "ETH spent",
    count: ethSpent,
    icon: <IoWalletOutline className="text-[50px] mx-auto my-8" />,
  },
];

// component for all data
export function Data() {
  return (
    <div className="grid grid-cols-4 text-center justify-between w-full h-max items-center my-36">
      {Compiled_data.map((item, index) => (
        <div key={index} className="text-center">
          {item.icon}
          <h1 className="text-[30px] dark:text-white text-gray-800 font-bold leading-4">
            {item.count}
          </h1>
          <p className="text-gray-500 text-lg lg:text-[15px] my-4 leading-4">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}
