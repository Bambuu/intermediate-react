/* eslint-disable */
import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

export const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Heroes</Link>
      <Link to="/theming">Theming</Link>
      <Link to="/extra">Extra Exercise</Link>
	  <Link className="assignment-link" to="/assignment-fake">Fake Assignment</Link>
    </div>)
};