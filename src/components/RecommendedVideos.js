import React from "react";
import PropTypes from "prop-types";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import placeHolderThumbnail from "../images/ironman_real_suit.jpg";
import placeholderChannelThumbnail from "../images/avatar_alex_lab.jpg";

const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos_videos">
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={placeholderChannelThumbnail}
          channel="Reactor Labs"
          image={placeHolderThumbnail}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={placeholderChannelThumbnail}
          channel="Reactor Labs"
          image={placeHolderThumbnail}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={placeholderChannelThumbnail}
          channel="Reactor Labs"
          image={placeHolderThumbnail}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={placeholderChannelThumbnail}
          channel="Reactor Labs"
          image={placeHolderThumbnail}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={placeholderChannelThumbnail}
          channel="Reactor Labs"
          image={placeHolderThumbnail}
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={placeholderChannelThumbnail}
          channel="Reactor Labs"
          image={placeHolderThumbnail}
        />
      </div>
    </div>
  );
};

RecommendedVideos.defaultProps = {};

RecommendedVideos.propTypes = {};

export default RecommendedVideos;
