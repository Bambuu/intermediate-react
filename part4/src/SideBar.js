/* eslint-disable */
import React from 'react';
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

export const SideBar = (props) => {
	return (
		<div className="sidebar">
			<NavLink activeStyle={{color: 'red'}} to={"/heroes"} onClick={() => props.changePage('/')}>Heroes</NavLink>
			<NavLink activeStyle={{color: 'red'}} to={"/movies"}>Movies</NavLink>
			<NavLink activeStyle={{color: 'red'}} to={"/theming"}>Theming</NavLink>
			<NavLink activeStyle={{color: 'red'}} to={"/extra"}>Extra Exercise</NavLink>
		</div>)
};

SideBar.propTypes = {
	changePage: PropTypes.func.isRequired,
};
