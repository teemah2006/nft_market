"use client"; 
import { useRouter } from "next/navigation";
import { IoChevronBackCircle } from "react-icons/io5";


const GoBack = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="btn">
      <IoChevronBackCircle className="text-[50px] dark:text-gray-500 text-gray-900 mx-4"/>
    </button>
  );
};

export default GoBack;