"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface SelectOptionProps {
  type: "event" | "review";
}

function SelectOption({ type }: SelectOptionProps) {
  const options = {
    event: ["최신순", "인기순"],
    review: ["좋아요순", "싫어요순", "최신순"],
  };

  const [selectedOption, setSelectedOption] = useState(options[type][0]);
  const [isSelected, setIsSelected] = useState(false);

  const toggleDropdown = () => {
    setIsSelected((prev) => !prev);
  };

  const handleClickOption = (option: string) => {
    setSelectedOption(option);
    setIsSelected(false);
  };

  return (
    <div className="relative text-fs-12 font-bold text-neutral-70">
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
        <div className="absolute bg-white shadow-primary w-[120px] rounded-md z-10">
          <ul className="flex flex-col justify-center">
            {options[type].map((option) => (
              <li
                key={option}
                className="py-2 px-3 hover:bg-gray-100" // Apply consistent padding
                onClick={() => handleClickOption(option)}
              >
                <Link href="#">
                  <a className="block w-full ">{option}</a>{" "}
                  {/* Ensure the anchor fills the li */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectOption;
