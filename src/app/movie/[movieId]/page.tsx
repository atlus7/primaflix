import React from "react";
import { API_KEY } from "@/constants";
import PageDetail from "@/components/PageDetail";

async function getMovieDetail(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const MovieDetail = async ({ params }: { params: { movieId: string } }) => {
  const data = await getMovieDetail(params.movieId);

  return <PageDetail data={data} type={"movie"}></PageDetail>;
};

export default MovieDetail;
