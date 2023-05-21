"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMG_PATH } from "@/constants";
import { MediaType, Product as Product_ } from "@/type";

const ProductCard = (props: { product: Product_; type: MediaType }) => {
  const { product, type } = props;
  const [loadComplete, setLoadComplete] = useState(false);

  const href =
    product.media_type !== "person"
      ? `/${product.media_type ? product.media_type : type}/${product.id}`
      : "#";
  const title = product.original_title ? product.original_title : product.name;

  useEffect(() => {});

  const imageJSX =
    Boolean(product.poster_path) || Boolean(product.profile_path) ? (
      <Image
        src={`${IMG_PATH}/${
          product.poster_path ? product.poster_path : product.profile_path
        }`}
        alt={title}
        fill
        sizes="20%"
        className={`!static ${loadComplete ? "" : "invisible"}`}
        onLoadingComplete={() => {
          setLoadComplete(true);
        }}
      ></Image>
    ) : (
      <div className="bg-slate-200 h-full flex justify-center items-center p-[15px] pt-[125%]">
        {title}
      </div>
    );

  return (
    <div className={"flex-[0_0_20%] w-[20%] relative"}>
      {product.media_type !== "person" ? (
        <Link href={href}>{imageJSX}</Link>
      ) : (
        imageJSX
      )}
    </div>
  );
};

export default ProductCard;
