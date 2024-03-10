import Link from "next/link";
import { ComponentProps } from "react";
import CategoryItem from "../CategoryItem";

interface CategoryListProps {
  categories: Array<ComponentProps<typeof CategoryItem>["category"]>;
}

function CategoryList({ categories }: CategoryListProps) {
  const handleClickCategory = (categoryName: string) => {
    console.log(categoryName);
  };

  return (
    <ul className="w-full overflow-auto scrollbar-hide flex gap-6 mb-4">
      {categories.map((category) => (
        <li key={category.id}>
          <Link href="/">
            <CategoryItem category={category} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
