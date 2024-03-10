"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

function SearchBar({ placeholder }: { placeholder: string }) {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      setKeyword("");
      return router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
    }

    if (!keyword.trim()) return router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder={placeholder}
        className='border-b px-2 outline-none'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type='submit'>검색</button>
    </form>
  );
}

export default SearchBar;
