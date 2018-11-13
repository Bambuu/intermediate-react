/* eslint-disable */
import React from 'react';
import PropTypes from "prop-types";

export const SideBar = (props) => {
  return (
    <div className="sidebar">
      <a onClick={() => props.changePage('/')}>Heroes</a>
      <a onClick={() => props.changePage('/theming')}>Theming</a>
      <a onClick={() => props.changePage('/extra')}>Extra Exercise</a>
    </div>)
};

SideBar.propTypes = {
  changePage: PropTypes.func.isRequired,
};