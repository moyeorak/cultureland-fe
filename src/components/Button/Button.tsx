import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  color?: "primary" | "neutral";
  size?: "regular" | "small";
}

function Button({
  color = "primary",
  size = "regular",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={` text-center rounded text-fs-14 ${
        size === "small" ? "h-[40px] min-w-[90px]" : "h-[50px] w-full "
      } 
      data-[color=neutral]:bg-neutral-60 data-[color=primary]:bg-user-theme-100 text-font-white`}
      data-color={color}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
