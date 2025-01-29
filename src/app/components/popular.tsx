'use-client';
import { Popularauction_details } from "./popular_auctions";
import { Nftcard } from "./live_auctions";
export default function Popular_auctions(){
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
                <Nftcard key={item.id} src={item.src} alt={item.alt} desc={item.description} price={item.price} 
                time={item.time} bidding={item.bidding} likes={item.likes} liked={item.id%2 === 0? true: false} avatar={false}/>
            ))
                    
                }
            </div>
            <button className=" lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500  rounded-xl p-4 font-bold ">Show me more</button>

        </div>
    )
}