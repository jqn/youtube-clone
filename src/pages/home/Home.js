import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import RecommendedVideos from "./RecommendedVideos";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="app_page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
};

export default Home;
