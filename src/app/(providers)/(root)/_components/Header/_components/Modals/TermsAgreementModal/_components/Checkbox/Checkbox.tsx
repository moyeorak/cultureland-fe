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
        className="w-5 h-5 rounded-full border bg-black peer-checked:bg-user-theme-100 flex items-center justify-center cursor-pointer"
      >
        <div className="w-2 h-2 rounded-full bg-white peer-checked:hidden"></div>
      </label>
      {children}
    </div>
  );
};

export default Checkbox;
