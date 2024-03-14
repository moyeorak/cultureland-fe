import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, children, ...props }) => {
  return (
    <div className="flex items-center">
      <input id={id} className="hidden peer" {...props} />
      <label
        htmlFor={id}
        className="sm:w-5 sm:h-5 w-4 h-4 rounded-full border bg-black peer-checked:bg-user-theme-100 flex items-center justify-center cursor-pointer"
      >
        <div className="sm:w-2 sm:h-2 w-1.5 h-1.5 rounded-full bg-white peer-checked:hidden"></div>
      </label>
      {children}
    </div>
  );
};

export default Checkbox;
