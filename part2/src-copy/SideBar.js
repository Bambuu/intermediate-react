/* eslint-disable */
import React from 'react';
import PropTypes from "prop-types";

export const SideBar = (props) => {
	return (
		<div className="sidebar">
			<a onClick={() => props.changePage('/')}>Heroes</a>
			<a onClick={() => props.changePage('/movies')}>Movies</a>
      <a onClick={() => props.changePage('/theming')}>Theming</a>
      <a onClick={() => props.changePage('/extra')}>Extra Exercise 1</a>
		</div>)
};

SideBar.propTypes = {
	changePage: PropTypes.func.isRequired,
};