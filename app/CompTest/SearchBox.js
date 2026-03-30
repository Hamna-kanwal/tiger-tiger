"use client";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBox() {
  return (
    <div className="hidden md:flex items-center bg-[#F1D98F] rounded-full px-[10px] py-[14px] w-[320px]">
      <FaMagnifyingGlass className="text-[#556D08] text-sm mr-[10px]" size={20} />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent focus:outline-none w-full"
      />
    </div>
  );
}