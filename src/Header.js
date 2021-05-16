import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import youTubeLogo from "./images/yt_logo_rgb_light.png";
import portrait from "./images/2020_june_head.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img className="header_logo" src={youTubeLogo} alt="logo" />
        </Link>
      </div>
      <div className="header_input">
        <input
          value={inputSearch}
          type="text"
          placeholder="Search"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`search/${inputSearch}`}>
          <SearchIcon className="header_inputButton" />
        </Link>
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar src={portrait} alt="jqn" />
      </div>
    </div>
  );
};

export default Header;
