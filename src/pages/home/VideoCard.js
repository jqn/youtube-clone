import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="videoCard">
      <img className="videoCard_thumbnail" src={image} alt="" />
      <div className="videoCard_info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImage} />
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

VideoCard.defaultProps = {
  image: "",
  title: "",
  channel: "",
  views: "",
  timestamp: "",
  channelImage: "",
};

VideoCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  views: PropTypes.string,
  timestamp: PropTypes.string,
  channelImage: PropTypes.string,
};

export default VideoCard;
