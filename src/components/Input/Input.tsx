import Image from "next/image";
import React, { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  iconShowPath?: string;
  iconHidePath?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  iconShowPath,
  iconHidePath,
  ...props
}) => {
  const [inputType, setInputType] = useState("password");
  const [iconPath, setIconPath] = useState(iconHidePath);

  const togglePasswordVisibility = () => {
    if (inputType === "password") {
      setInputType("text");
      setIconPath(iconShowPath);
    } else {
      setInputType("password");
      setIconPath(iconHidePath);
    }
  };

  return (
    <div className="flex flex-col">
      {label && id && (
        <label htmlFor={id} className="mb-3 text-sm font-medium">
          {label}
        </label>
      )}
      <div className="flex items-center border rounded w-full relative focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
        <input
          id={id}
          type={inputType}
          className="rounded text-fs-14 py-2 px-3 border-0 flex-1 focus:ring-0 focus:border-blue-500"
          {...props}
        />
        {iconPath && (
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            <Image
              src={iconPath}
              alt="Toggle visibility"
              width={20}
              height={20}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
