"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface SelectOptionProps {
  type: "event" | "review";
  orderBy: "likes" | "hates" | "recent";
  setOrderBy: Dispatch<SetStateAction<"likes" | "hates" | "recent">>;
}

function SelectOption({ type, orderBy, setOrderBy }: SelectOptionProps) {
  const options = {
    event: [
      { name: "최신순", value: "recent" },
      { name: "인기순", value: "famous" },
    ],
    review: [
      { name: "좋아요순", value: "likes" },
      { name: "싫어요순", value: "hates" },
      { name: "최신순", value: "recent" },
    ],
  };

  const [selectedOption, setSelectedOption] = useState(options[type][0].name);
  const [isSelected, setIsSelected] = useState(false);

  const toggleDropdown = () => {
    setIsSelected((prev) => !prev);
  };

  const handleClickOption = (
    option: string,
    value: "likes" | "hates" | "recent"
  ) => {
    //선택된 정렬 기준이 보여지기 전에 실행 되어야 하는 것들
    console.log(option, value);
    setOrderBy(value);
    //선택된 정렬 기준을 사용자에게 보여줌
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
                key={option.value}
                className="py-2 px-3 hover:bg-gray-100"
                onClick={() =>
                  handleClickOption(
                    option.name,
                    option.value as "likes" | "hates" | "recent"
                  )
                }
              >
                <span className="block w-full">{option.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectOption;
