import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  color?: "black";
}

function Button({
  color = "black",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="w-full text-center rounded text-fs-14 bg-neutral-60 text-font-white h-[50px]"
      data-color={color}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
