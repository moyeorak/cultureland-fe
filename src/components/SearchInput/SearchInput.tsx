"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useRef } from "react";

interface SearchBarProps {
  initialKeyword?: string;
  autoFocus?: boolean;
  clearAfterSearch?: boolean;
  placeholder?: string;
}

function SearchBar({
  initialKeyword = "",
  autoFocus = false,
  clearAfterSearch = false,
  placeholder = "검색어를 입력해 보세요",
}: SearchBarProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!inputRef.current) return;

    const rawKeyword = inputRef.current.value || "";
    const keyword = rawKeyword.trim();
    if (keyword === "") return alert("검색어를 입력해 주세요");

    const url = `/search?keyword=${encodeURIComponent(keyword)}`;

    router.push(url);

    if (clearAfterSearch) inputRef.current.value = "";
  };

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.value = initialKeyword;
  }, [initialKeyword]);

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        placeholder={placeholder}
        ref={inputRef}
        type="text"
        autoFocus={autoFocus}
        className="w-[240px] h-9 px-2 placeholder:text-sm text-sm outline-none border-b border-neutral-30 focus:border-user-theme-90 transition-colors"
      />
      <button className="block" type="submit">
        <Image
          src={`/utils/icons/search.png`}
          alt="Toggle visibility"
          width={20}
          height={20}
          className="absolute right-2 top-2"
        />
      </button>
    </form>
  );
}

export default SearchBar;
