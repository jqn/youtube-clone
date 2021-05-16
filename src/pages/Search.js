import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SearchPage from "../components/SearchPage";

const Search = () => {
  return (
    <div className="search">
      <Header />
      <div className="app_page">
        <Sidebar />
        <SearchPage />
      </div>
    </div>
  );
};

export default Search;
