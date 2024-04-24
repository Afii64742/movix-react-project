import React from "react";
import Banner from "./banner/Banner";
import Trending from "./Trending/Trending";
import "./style.scss";
const Home = () => {
  return (
    <div>
      <Banner />
      <Trending />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
