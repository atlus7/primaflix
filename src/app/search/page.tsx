import React from "react";
import { API_KEY } from "@/constants";
import ProductList from "@/components/ProductList";
import Pagination from "@/components/Pagination";

async function getSearchResults(query: string, page: number = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}&api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Search = async ({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) => {
  const query = searchParams.query;
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const data = query
    ? await getSearchResults(query, page)
    : { results: [], pageCount: 0 };

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px]">
      {data.results.length !== 0 ? (
        <ProductList products={data.results}></ProductList>
      ) : (
        <div>No Result(s) Found. Please use other keywords.</div>
      )}
      {data.results.length !== 0 && (
        <Pagination
          pageCount={data.total_pages}
          currentPage={page}
        ></Pagination>
      )}
    </div>
  );
};

export default Search;
