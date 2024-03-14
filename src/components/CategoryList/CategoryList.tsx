import Category from "./_components/Category";

async function CategoryList() {
  const categories = (await fetch(
    "https://port-0-culture-land-am952nltdolcl9.sel5.cloudtype.app/events/category"
  )
    .then((res) => res.json())
    .then((res: any) => res.result)) as { name: string; code: number }[];

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
