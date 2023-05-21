import React from "react";
import { useRouter } from "next/router";

const TvDetail = ({ movie }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading</h1>;
  }

  return <div>{movie.id}</div>;
};

export default TvDetail;

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US&api_key=c14b02b79b5b010f7d3863e74b00a8dd`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie: data,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "713704" } }],
    fallback: true,
  };
};
