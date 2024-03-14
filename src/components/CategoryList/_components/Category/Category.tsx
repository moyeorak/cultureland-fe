"use client";

import { Category } from "@/types/Category.type";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface CategoryProps {
  category: Omit<Category, "value">;
}

function Category({ category }: CategoryProps) {
  const searchParams = useSearchParams();
  const currentCategoryCode = searchParams.get("category") || "0";
  const queryString = new URLSearchParams(searchParams.toString());
  queryString.set("category", String(category.name));

  const isSelected = String(category.name) === currentCategoryCode;

  return (
    <Link
      href={{ query: queryString.toString() }}
      data-selected={isSelected}
      className="text-neutral-90 px-4 text-[15px] leading-none py-2 flex items-center data-[selected=true]:text-user-theme-80 data-[selected=true]:font-semibold font-normal"
    >
      {category.name}
    </Link>
  );
}

export default Category;
