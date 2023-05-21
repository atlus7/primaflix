"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchTvShows } from "@/redux/features/tvSlice";
import Carousel from "../../components/Carousel";

export default function TvHome() {
  const data = useAppSelector((state) => state.tv);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTvShows());
  }, [dispatch]);

  return (
    <div>
      {!data.loading && data.tvShows?.airingToday?.length > 0 && (
        <Carousel
          title={"AIRING TODAY"}
          products={data.tvShows.airingToday}
          type={"tv"}
        ></Carousel>
      )}
      {!data.loading && data.tvShows?.popular?.length > 0 && (
        <Carousel
          title={"POPULAR"}
          products={data.tvShows.popular}
          type={"tv"}
        ></Carousel>
      )}
      {!data.loading && data.tvShows?.topRated?.length > 0 && (
        <Carousel
          title={"TOP RATED"}
          products={data.tvShows.topRated}
          type={"tv"}
        ></Carousel>
      )}
    </div>
  );
}
