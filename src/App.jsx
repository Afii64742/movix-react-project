import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import useSelector and useDispatch hook from redux
import { useDispatch } from "react-redux";
// Importing state actions from home slice
import { getApiConfiguration } from "./store/homeSlice";
// PAGES IMPORTS
import Home from "./pages/home/Home";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Detail from "./pages/detail/Detail";
import { fetchDataFromApi } from "./utils/api";

function App() {
  // creating instance of useDispatch hook
  const dispatch = useDispatch();

  // functio for fetching TMBD API config

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };

        // dispatch url
        dispatch(getApiConfiguration(url));
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
