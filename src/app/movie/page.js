"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchMovies } from "@/redux/features/movieSlice";
import Carousel from "../../components/Carousel";

export default function MovieHome() {
  const data = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      {!data.loading && data.movies?.nowPlaying?.length > 0 && (
        <Carousel
          title={"NOW PLAYING"}
          products={data.movies.nowPlaying}
          type={"movie"}
        ></Carousel>
      )}
      {!data.loading && data.movies?.popular?.length > 0 && (
        <Carousel
          title={"POPULAR"}
          products={data.movies.popular}
          type={"movie"}
        ></Carousel>
      )}
      {!data.loading && data.movies?.topRated?.length > 0 && (
        <Carousel
          title={"TOP RATED"}
          products={data.movies.topRated}
          type={"movie"}
        ></Carousel>
      )}
    </div>
  );
}
