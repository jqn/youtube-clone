import React from "react";
import PropTypes from "prop-types";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import videoThumbnail from "../images/ironman_real_suit.jpg";
import channelThumbnail from "../images/avatar_alex_lab.jpg";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={channelThumbnail}
        channel="Reactor Labs"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming lessons here!"
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want FREE one hour training... check this out."
        channel="Reactor Labs"
        title="Let's build a clone"
        image={videoThumbnail}
      />
    </div>
  );
};

SearchPage.defaultProps = {};

SearchPage.propTypes = {};

export default SearchPage;
