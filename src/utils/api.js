import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmQ3NWE3YWUzNmMzMDg5NDRlZDgzNmZiOGRiOWY5MCIsInN1YiI6IjY2MDdiNTY2YTg5NGQ2MDE3YzY1MDMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5DqOO1p2Hry_nBDiriwSsaBLlJrjj9fvD4-YPbqhZUk";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
