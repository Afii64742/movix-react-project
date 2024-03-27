import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Detail from "./pages/detail/Detail";
import fetchDataFromApi from "./utils/api";

function App() {
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        console.log(res);
        // const url = {
        //   backdrop: res.images.secure_base_url + "original",
        //   poster: res.images.secure_base_url + "original",
        //   profile: res.images.secure_base_url + "original",
        // };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchApiConfig();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Detail />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
