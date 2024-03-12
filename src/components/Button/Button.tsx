import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  color?: "primary" | "neutral";
}

function Button({
  color = "primary",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="w-full text-center rounded text-fs-14 data-[color=neutral]:bg-neutral-60 data-[color=primary]:bg-user-theme-100 text-font-white h-[50px]"
      data-color={color}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
