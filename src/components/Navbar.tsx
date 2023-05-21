"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const pathname = usePathname();
  const query = useSearchParams().get("query") || "";

  return (
    <div className="flex justify-between py-5 items-center h-[75px]">
      {pathname !== "/" && (
        <Link href="/" className="font-bold text-xl basis-[30%]">
          <h1>PRIMAFLIX</h1>
        </Link>
      )}
      <div className="ml-3 basis-[40%] text-center">
        {pathname !== "/" && (
          <Searchbar
            initialValue={pathname === "/search" ? query : ""}
          ></Searchbar>
        )}
      </div>
      <div className="flex basis-[30%] justify-end items-center">
        <Link href="/movie">
          <div
            className={`${
              pathname === "/movie" ? "border-b border-black" : null
            }`}
          >
            Movies
          </div>
        </Link>
        <div className="mx-[16px]">|</div>
        <Link href="/tv">
          <div
            className={`${pathname === "/tv" ? "border-b border-black" : null}`}
          >
            TV Shows
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
