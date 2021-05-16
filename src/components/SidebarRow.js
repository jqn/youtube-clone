import React from "react";
import PropTypes from "prop-types";

import "./SidebarRow.css";

const SidebarRow = ({ title, Icon, selected }) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow_icon" />
      <h2 className="sidebarRow_title">{title}</h2>
    </div>
  );
};

SidebarRow.defaultProps = {};

SidebarRow.propTypes = {};

export default SidebarRow;
