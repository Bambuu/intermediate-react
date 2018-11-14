/* eslint-disable */
import React from 'react';
import PropTypes from "prop-types";

export const SideBar = (props) => {
	return (
		<div className="sidebar">
			<a href="javascript:void(0)" onClick={() => props.changePage('/')}>Heroes</a>
      <a href="javascript:void(0)" onClick={() => props.changePage('/theming')}>Theming</a>
      <a href="javascript:void(0)" onClick={() => props.changePage('/extra')}>Extra Exercise</a>
		</div>)
};

SideBar.propTypes = {
	changePage: PropTypes.func.isRequired,
};
