"use client";
import Image from "next/image";
import { Images } from "../images/image";
import Link from "next/link";
import { Navlinks } from "../utilities/navLinks";
import { socialMediaLinks } from "../utilities/navLinks";

// this is the page's footer component
export default function Footer() {
  return (
    <div className="bg-transparent border shadow-lg  dark:border-gray-500 border-gray-500 rounded-xl w-[90%] justify-self-center h-[400px] grid grid-cols-3 backdrop-blur-xs backdrop-grayscale">
      <div className="border-r p-4 border-gray-500">
        <Image
          src={Images.logo}
          alt="logo"
          width={100}
          className="md:w-20 w-14 inline"
        />
        <span className="font-bold text-[30px] font-sans align-middle">
          NFT Market
        </span>
        <div className="mt-[250px] flex flex-row justify-between text-sm dark:text-gray-500 text-gray-700">
          <div>Support</div>
          <div>Term of service</div>
          <div>License</div>
        </div>
      </div>
      <div className="border-r border-gray-500">
        {Navlinks.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              className={`text-[16px] lg:text-[17px] font-bold block  mx-8 my-4`}
            >
              {link.name}
            </Link>
          );
        })}
        <button className=" lg:text-[17px] ml-10 text-[16px] text-white bg-indigo-800  rounded-xl p-4 font-bold">
          My account
        </button>
        <div className="flex flex-row space-x-4 mt-[65px] mx-8 dark:text-gray-500 text-gray-700 text-[100px] py-5 px-6 md:px-4">
          {socialMediaLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                className="text-[23px]  tracking-wide"
              >
                <IconComponent />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="p-6">
        <div className="dark:text-gray-500 text-gray-800 text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          molestias expedita saepe exercitationem.
        </div>
        <div className="mt-[200px]">
          <input
            className=" bg-white border border-gray-700  dark:border-none  rounded-xl w-[90%] h-[45px] align-middle box-border p-6"
            placeholder="Newsletter"
          ></input>
          <a href="" className="text-[18px]  text-indigo-800 inline -m-[70px]">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
