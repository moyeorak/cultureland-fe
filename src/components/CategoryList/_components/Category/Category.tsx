"use client";

import { Category } from "@/types/Category.type";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface CategoryProps {
  category: Category;
}

function Category({ category }: CategoryProps) {
  const searchParams = useSearchParams();
  const currentCategoryCode = searchParams.get("category");
  const queryString = new URLSearchParams(searchParams.toString());
  queryString.set("category", String(category.code));

  const isSelected = String(category.code) === currentCategoryCode;

  return (
    <Link
      href={{ query: queryString.toString() }}
      data-selected={isSelected}
      className="text-white bg-gray-300 px-4 text-[15px] leading-none py-2 rounded-full flex items-center data-[selected=true]:bg-user-theme-80 data-[selected=true]:font-semibold font-medium"
    >
      {category.name}
    </Link>
  );
}

export default Category;
