import { cva } from "class-variance-authority";
import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  outline?: boolean;
}

function Button({
  color = "primary",
  size = "md",
  fullWidth = false,
  outline = false,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const buttonVariant = cva(
    "text-center rounded font-medium transition-colors",
    {
      variants: {
        color: {
          primary: "text-white bg-user-theme-90 hover:bg-user-theme-70",
          secondary: "text-white bg-neutral-90 hover:bg-neutral-70",
        },
        size: {
          sm: "text-sm py-1.5 px-3",
          md: "text-[15px] py-2 px-4",
          lg: "text-[17px] py-2.5 px-5",
        },
        fullWidth: {
          true: "w-full",
        },
        outline: {
          true: "",
          false: "",
        },
      },
      compoundVariants: [
        {
          color: "primary",
          outline: true,
          className:
            "!text-user-theme-90 !bg-white border border-user-theme-90 hover:!bg-user-theme-10",
        },
      ],
    }
  );

  return (
    <button
      className={buttonVariant({ color, size, fullWidth, outline })}
      data-color={color}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
