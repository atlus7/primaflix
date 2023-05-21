"use client";

import React from "react";
import Image from "next/image";
import { IMG_PATH } from "@/constants";
import { Product, MediaType } from "@/type";

const helper = (x: { name: string }[]) => {
  let text = "";
  x.forEach((item) => {
    text += `${item.name}, `;
  });

  return text.slice(0, -2);
};

const formatDate = (x: string) => {
  const options: { year: "numeric"; month: "long"; day: "numeric" } = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(x).toLocaleDateString("en-US", options);
};

const formatLanguage = (code: string) => {
  const lang = new Intl.DisplayNames(["en"], { type: "language" });
  return lang.of(code);
};

const formatCurrency = (x: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(x);
};

const formatRating = (x: number) => {
  return (x * 10).toFixed(2);
};

interface PageDetail {
  data: Product;
  type: MediaType;
}

const PageDetail = (props: { data: Product; type: MediaType }) => {
  const { data, type } = props;

  const genres = helper(data.genres);
  const prodCountries = helper(data.production_countries);
  const prodCompanies = helper(data.production_companies);
  const title = data.original_title ? data.original_title : data.name;

  const filtered =
    type === "movie"
      ? [
          { type: "Status", content: data.status },
          {
            type: "Release Date",
            content: formatDate(data.release_date),
          },
          { type: "Genres", content: genres },
          {
            type: "Language",
            content: formatLanguage(data.original_language),
          },
          { type: "Revenue", content: formatCurrency(data.revenue) },
          { type: "Budget", content: formatCurrency(data.budget) },
          { type: "Production Countries", content: prodCountries },
          { type: "Production Companies", content: prodCompanies },
          {
            type: "User Rating",
            content: `${formatRating(data.vote_average)}% (${
              data.vote_count
            } votes)`,
          },
        ]
      : [
          { type: "Status", content: data.status },
          { type: "First Air Date", content: formatDate(data.first_air_date) },
          { type: "Last Air Date", content: formatDate(data.last_air_date) },
          { type: "Genres", content: genres },
          { type: "Language", content: formatLanguage(data.original_language) },
          { type: "Production Countries", content: prodCountries },
          { type: "Production Companies", content: prodCompanies },
          {
            type: "User Rating",
            content: `${formatRating(data.vote_average)}% (${
              data.vote_count
            } votes)`,
          },
        ];

  return (
    <div>
      <div
        className={
          "flex flex-col items-center w-[800px] mx-auto my-0 pb-[50px]"
        }
      >
        <h1 className="text-xl mb-[16px] font-bold">{title}</h1>
        {data.poster_path ? (
          <Image
            src={`${IMG_PATH}/${data.poster_path}`}
            alt={title}
            width={200}
            height={300}
            priority={true}
            className="mb-[16px]"
          ></Image>
        ) : null}
        <div className="text-center mb-[8px]">{data.overview}</div>
        <table className="w-[500px]">
          <tbody>
            {filtered.map((item) => {
              return item.content ? (
                <tr key={item.type}>
                  <td className="text-right font-bold py-[2px]">{item.type}</td>
                  <td className="pl-[25px] py-[2px]">{item.content}</td>
                </tr>
              ) : null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageDetail;
