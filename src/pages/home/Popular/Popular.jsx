import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/popular`);
  const onTabhange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">What's Popular</span>
          <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabhange} />
        </ContentWrapper>
        <Carousel endpoint={endpoint} data={data?.results} loading={loading} />
      </div>
    </div>
  );
};

export default Popular;
