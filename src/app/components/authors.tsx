"use client";
import ProfileCard from "./profile_card";
import { Images } from "../images/image";
const users = [
  { avatar: Images.avatar, username: "brook_sim", items: 206, collections: 12 },
  {
    avatar: Images.avatar1,
    username: "marvinmckin",
    items: 479,
    collections: 24,
  },
  {
    avatar: Images.avatar2,
    username: "esther_howard",
    items: 387,
    collections: 10,
  },
];

export default function Authors() {
  return (
    <div className="rounded-2xl dark:border-none border-2 h-min lg:h-max lg:h-auto w-full bg-gray-900 p-4 my-8 box-border dark:gradient1  shadow-lg">
      <div className="relative rounded-xl border-t-2 dark:border-none  -top-[2.5rem] pl-4 text-gray-500 gradient2  w-1/3 h-[50px] -left-[1rem] skew-x-10 font-extrabold text-left tracking-wider">
        . . .
      </div>
      <div className="flex flex-row gap-6 p-10 box-border">
        <div className="w-1/2">
          <small className="text-gray-500 text-[16px] tracking-wide">
            OVERLINE
          </small>
          <h1 className="lg:text-[50px] text-[30px] text-white font-bold font-serif my-6 text-sm/14">
            Sapien Ipsum scelerisque convallis fusse. Join now{" "}
          </h1>
          <p className="text-gray-500 text-lg lg:text-[18px] my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            adipisci eaque architecto dolorem ipsa,{" "}
          </p>
          <div className="flex flex-row gap-4 mt-10">
            <button className=" lg:text-[17px] text-[16px] text-white bg-indigo-800  rounded-xl p-4 font-bold">
              Get started
            </button>
            <button className=" lg:text-[17px] text-[16px] text-gray-400 border-2 border-gray-500  rounded-xl p-4 font-bold ">
              Learn more
            </button>
          </div>
        </div>
        <div className="min-h-screen  bg-transparent text-white flex justify-center items-center p-6 w-1/2">
          <div className="w-full max-w-2xl space-y-4">
            {users.map((user, index) => (
              <ProfileCard key={index} {...user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
