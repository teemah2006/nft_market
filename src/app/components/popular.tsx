'use client';
import { Popularauction_details } from "./popular_auctions";
import { Nftcard } from "./live_auctions";
import { useRouter } from "next/navigation";

export default function Popular_auctions(){
    const router = useRouter();


    return(
        <div className="mt-36 text-center">
            <h1 className="font-sans font-bold text-white lg:text-[50px] sm:text-[30px] mb-10 ">Most popular live auctions</h1>
            <div className="my-10">
                <span className="lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500  rounded-xl p-2 mx-6">Architecture</span>
                <span className="lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-400  rounded-xl p-2 mx-6">Photography</span>
                <span className="lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500  rounded-xl p-2 mx-6">Games</span>
                <span className="lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500  rounded-xl p-2 mx-6">Music</span>
            </div>
            <div className="grid grid-cols-4  justify-between">
            {Popularauction_details.map((item) => (
                <div key={item.id} onClick={() => {   router.push(`/artDetails?id=${item.id}&src=${'/art4.jpeg'}&title=${item.description}&alt=${item.alt}&author=${item.author}
                &price=${item.price}&time=${item.time}&bid=${item.bidding}&liked=${item.id%2 === 0? true: false}`);
                }}  style={{ cursor: "pointer" }}>
                    <Nftcard   src={item.src} alt={item.alt} author={item.author} desc={item.description} price={item.price} 
                time={item.time} bidding={item.bidding} likes={item.likes} liked={item.id%2 === 0? true: false} avatar={false} />
                </div>
                
            ))
                    
                }
            </div>
            <button className=" lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500  rounded-xl p-4 font-bold ">Show me more</button>

        </div>
    )
}