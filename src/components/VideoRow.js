import React from "react";
import PropTypes from "prop-types";
import "./VideoRow.css";

const VideoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} •{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs}</span>
          </span>{" "}
          Subscribers {views} views • {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
};

VideoRow.defaultProps = {};

VideoRow.propTypes = {};

export default VideoRow;
