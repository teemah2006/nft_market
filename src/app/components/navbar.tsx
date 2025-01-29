'use client';

import Link from "next/link";
import React, { use, useState } from "react";
import Image from "next/image";
import { Images } from "../images/image";
import { Navlinks } from "../utilities/navLinks";

export default function Navbar(){
    return(
        <div className="p-4 w-full top-0 lg:p-8 bg-transparent flex flex-row justify-between items-center ">
            <div className="bases-3xs">
              <Image src={Images.logo} alt="logo" width={100} className="md:w-20 w-14" />
            </div>
            {/* <div className=""> */}
            {Navlinks.map((link, index) => {
          return (
            <Link key={index} href={link.href}     className={`text-[16px] lg:text-[17px] font-bold  text-gray-400`}>
              {link.name}
            </Link>
          );
        })}
            {/* </div> */}
            <div className="flex flex-row justify-between basis-1/5">
            <button className=" lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500  rounded-xl p-4 font-bold ">contact</button>
            <button className=" lg:text-[17px] text-[16px] text-white bg-indigo-800  rounded-xl p-4 font-bold">My account</button>
            </div>
            
        </div>
    )
}
