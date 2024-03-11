"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function SelectOption() {
  const [selectedOption, setSelectedOption] = useState("최신순");
  const [isSelected, setIsSelected] = useState(false);

  const toggleDropdown = () => {
    setIsSelected((prev) => !prev);
  };

  const handleClickOption = (option: string) => {
    setSelectedOption(option);
    setIsSelected(false);
    console.log(option);
  };

  return (
    <div className="relative text-fs-12 font-bold text-neutral-70 ">
      <button
        onClick={toggleDropdown}
        className="shadow-primary w-[120px] mb-5 pt-2 h-6 rounded-md flex items-center justify-between py-[6px] px-[10px]"
      >
        {selectedOption}
        <Image
          src={
            isSelected
              ? "/utils/icons/caret-up-black.png"
              : "/utils/icons/caret-down-black.png"
          }
          alt="drop-down"
          width={18}
          height={18}
        />
      </button>
      {isSelected && (
        <div className="absolute bg-white shadow-primary w-[120px] rounded-md  z-10 pb-2">
          <ul className="flex flex-col justify-center pt-0 ">
            <li
              className="h-6 px-3 py-2"
              onClick={() => handleClickOption("최신순")}
            >
              <Link href={"#"}>최신순</Link>
            </li>
            <li
              className="h-6 px-3 py-2 pt-2"
              onClick={() => handleClickOption("인기순")}
            >
              <Link href={"#"}>인기순</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectOption;
