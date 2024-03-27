import react from "react";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
const useFetch = (url) => {
  const { data, setData } = useState(null);
  const { loading, setLoading } = useState(null);
  const { error, setError } = useState(null);

  useEffect(
    (url) => {
      setLoading("Loading...");
      setData(null);
      setError(null);
      fetchDataFromApi(url)
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    },
    [url]
  );
  return { data, loading, error };
};

export default useFetch;
