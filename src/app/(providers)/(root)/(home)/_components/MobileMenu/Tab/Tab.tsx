// components/Tab.js

import Image from "next/image";

interface TabProps {
  imgSrc: string;
  activeImgSrc: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ imgSrc, activeImgSrc, label, isActive, onClick }: TabProps) => {
  return (
    <button
      className={`flex flex-col items-center justify-center w-full focus:outline-none ${
        isActive ? "text-user-theme-100" : "text-neutral-70"
      }`}
      onClick={onClick}
    >
      <div className="w-6 h-6 transition-all duration-200">
        <Image
          src={isActive ? activeImgSrc : imgSrc}
          alt={label}
          width={24}
          height={24}
        />
      </div>
      <span className={`text-xs mt-1 transition-all duration-200`}>
        {label}
      </span>
    </button>
  );
};

export default Tab;
