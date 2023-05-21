import React from "react";
import { API_KEY } from "@/constants";
import PageDetail from "@/components/PageDetail";

async function getTvDetail(tvId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}?language=en-US&api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const MovieDetail = async ({ params }: { params: { tvId: string } }) => {
  const data = await getTvDetail(params.tvId);

  return <PageDetail data={data} type={"tv"}></PageDetail>;
};

export default MovieDetail;
