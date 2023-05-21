"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const renderItem = (number: number) => {
  return (
    <option
      key={number}
      value={number}
      className="rounded flex px-[8px] py-[5px] bg-neutral-200 mx-[4px] cursor-pointer"
    >
      {number}
    </option>
  );
};

interface Pagination {
  pageCount: number;
  currentPage: number;
}

const Pagination = (props: Pagination) => {
  const { pageCount, currentPage = 1 } = props;
  const router = useRouter();
  const query = useSearchParams().get("query");

  let options = [];
  for (let i = 1; i <= pageCount; ++i) {
    options.push(renderItem(i));
  }

  return (
    <div className={"flex items-center my-[16px]"}>
      Page
      <select
        className="rounded border ml-[4px] h-[30px] outline-none"
        onChange={(e) => {
          router.push(`/search?query=${query}&page=${e.target.value}`);
        }}
        value={currentPage}
      >
        {options}
      </select>
    </div>
  );
};

export default Pagination;
