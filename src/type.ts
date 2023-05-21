export type MediaType = "movie" | "type" | "person";

export interface Product {
  media_type: MediaType;
  id: number;
  original_title: string;
  name: string;
  profile_path?: string;
  poster_path?: string;
  status: string;
  release_date: string;
  original_language: string;
  revenue: number;
  budget: number;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
  last_air_date: string;
  overview: string;
  genres: {
    name: string;
  }[];
  production_countries: {
    name: string;
  }[];
  production_companies: {
    name: string;
  }[];
}
