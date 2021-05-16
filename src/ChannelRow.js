import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import "./ChannelRow.css";

const ChannelRow = ({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow_text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

ChannelRow.defaultProps = {};

ChannelRow.propTypes = {};

export default ChannelRow;
