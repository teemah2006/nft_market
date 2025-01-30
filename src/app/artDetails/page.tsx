"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
export default function Details() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const src = searchParams.get("src");
  const title = searchParams.get("title");
  const author = searchParams.get("author");
  const price = searchParams.get("price");
  const time = searchParams.get("time");
  const bidding = searchParams.get("bid");
  const liked = searchParams.get("liked");
  const alt = searchParams.get("alt")

  if (!id) return <p>Loading...</p>;

  return (
    <div className="rounded-xl border itmes-center dark:border-gray-500 border-gray-900 w-[90%] backdrop-blur-lg backdrop-grayscale p-6 grid grid-cols-2 gap-8 h-max justify-self-center bg-transparent">
      <div className="">
        <Image src={`${src}`} alt= {`${alt}`} width={600} height={600} className="w-full object-cover rounded-xl"/>
      </div>
      <p className="text-[20px] lg:text-[30px] font-bold">{title}</p>
    </div>
  );
}