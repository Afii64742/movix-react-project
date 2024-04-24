import React from "react";
import Banner from "./banner/Banner";
import Trending from "./Trending/Trending";
import "./style.scss";
import Popular from "./Popular/Popular";
import TopRated from "./topRated/TopRated";
const Home = () => {
  return (
    <div>
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
