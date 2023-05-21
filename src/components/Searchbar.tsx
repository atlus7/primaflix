"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Searchbar {
  initialValue?: string;
  main?: boolean;
}

const Searchbar = (props: Searchbar) => {
  const { initialValue = "", main = false } = props;
  const [value, setValue] = useState<string>(initialValue);
  const router = useRouter();

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/search?query=${value}`);
    }
  };

  return (
    <div className="flex relative items-center">
      <input
        className={`rounded-[24px] border border-slate-300 outline-0 ${
          main
            ? "w-[500px] py-[12px] px-[45px]"
            : "w-[100%] py-[5px] px-[40px] text-center"
        }`}
        placeholder="Search for Movies/TV Shows..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        value={value}
      ></input>
      <Image
        src="/search-icon.png"
        width="15"
        height="15"
        alt="search icon"
        priority={true}
        className="absolute left-[16px]"
      ></Image>
    </div>
  );
};

export default Searchbar;
