import { cva } from "class-variance-authority";
import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  outline?: boolean;
  disabled?: boolean;
}

function Button({
  color = "primary",
  size = "md",
  fullWidth = false,
  outline = false,
  disabled = false,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const buttonVariant = cva(
    "text-center rounded font-medium transition-colors outline-none",
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
        disabled: {
          true: "!bg-neutral-30 text-white",
        },
      },
      compoundVariants: [
        {
          color: "primary",
          outline: true,
          disabled: false,
          className:
            "!text-user-theme-90 !bg-white border border-user-theme-90 hover:!bg-user-theme-10",
        },
        {
          color: "secondary",
          outline: true,
          disabled: false,
          className:
            "!text-neutral-90 !bg-white border border-neutral-90 hover:!bg-neutral-10",
        },
      ],
    }
  );

  return (
    <button
      className={buttonVariant({ color, size, fullWidth, outline, disabled })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
