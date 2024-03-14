"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

function HeaderNavItem({ children, ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      data-active={pathname === props.href}
      className="hover:text-user-theme-90 hover:font-medium transition-all data-[active=true]:text-user-theme-90 data-[active=true]:font-medium text-sm"
    >
      {children}
    </Link>
  );
}

export default HeaderNavItem;
