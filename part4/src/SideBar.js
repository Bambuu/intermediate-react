/* eslint-disable */
import React from 'react';
import PropTypes from "prop-types";

export const SideBar = (props) => {
	return (
		<div className="sidebar">
			<a href="javascript:void(0)" onClick={() => props.changePage('/')}>Heroes</a>
      <a href="javascript:void(0)" onClick={() => props.changePage('/theming')}>Theming</a>
      <a href="javascript:void(0)" onClick={() => props.changePage('/extra')}>Extra Exercise</a>

      <a className="assignment-link" href="javascript:void(0)" onClick={() => props.changePage('/assignment-1')}>Assignment 1</a>
      <a className="assignment-link" href="javascript:void(0)" onClick={() => props.changePage('/assignment-extra-1')}>Extra Assignment 1</a>
      <a className="assignment-link" href="javascript:void(0)" onClick={() => props.changePage('/assignment-extra-2')}>Extra Assignment 2</a>
		</div>)
};

SideBar.propTypes = {
	changePage: PropTypes.func.isRequired,
};
