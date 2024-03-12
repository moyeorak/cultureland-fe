import { Category } from "@/types/Category.type";

interface CategoryProps {
  category: Category;
}

function CategoryItem({ category }: CategoryProps) {
  return (
    <button className="w-[130px] h-[29px] bg-[#D9D9D9] rounded-[72px]">
      {category.value}
    </button>
  );
}

export default CategoryItem;
