/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

export const SideBar = props => {
  return (
    <div className="sidebar">
      <a href="javascript:void(0)" onClick={() => props.changePage("/")}>
        Heroes
      </a>
      <a href="javascript:void(0)" onClick={() => props.changePage("/theming")}>
        Theming
      </a>
      <a href="javascript:void(0)" onClick={() => props.changePage("/extra")}>
        Extra Exercise
      </a>
      <a
        href="javascript:void(0)"
        className="assignment-link"
        onClick={() => props.changePage("/assignment-1")}
      >
        Assignment 1
      </a>
      <a
        href="javascript:void(0)"
        className="assignment-link"
        onClick={() => props.changePage("/assignment-2")}
      >
        Assignment 2
      </a>
      <a
        href="javascript:void(0)"
        className="assignment-link"
        onClick={() => props.changePage("/assignment-extra")}
      >
        Assignment Extra
      </a>
    </div>
  );
};

SideBar.propTypes = {
  changePage: PropTypes.func.isRequired
};
