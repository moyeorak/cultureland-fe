import api from "@/api/index.api";
import Category from "./_components/Category";

async function CategoryList() {
  const categories = await api.events.getCategories();
  if (!categories) return null;

  return (
    <ul className="w-full flex gap-x-2 gap-y-2 flex-wrap justify-center">
      {categories.map((category) => (
        <li key={category.code}>
          <Category category={category} />
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
