"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

function SearchBar({
  placeholder,
  border = false,
}: {
  placeholder: string;
  border?: boolean;
}) {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      setKeyword("");
      return router.push(`/search?keywords=${encodeURIComponent(keyword)}`);
    }

    if (!keyword.trim()) alert("검색어를 입력해주세요.");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-[360px] h-9 px-2 py-[6px] outline-none border-b rounded-none border-neutral-30 data-[border=true]:rounded-lg data-[border=true]:border "
        data-border={border}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Image
        src={`/utils/icons/search.png`}
        alt="Toggle visibility"
        width={20}
        height={20}
        className="absolute right-2 top-2"
      />
    </form>
  );
}

export default SearchBar;
