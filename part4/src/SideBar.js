/* eslint-disable */
import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export const SideBar = (props) => {
	return (
		<div className="sidebar">
			<Link to={"/heroes"} onClick={() => props.changePage('/')}>Heroes</Link>
			<Link to={"/movies"} onClick={() => props.changePage('/movies')} >Movies</Link>
			<Link to={"/theming"} onClick={() => props.changePage('/theming')} >Theming</Link>
			<Link to={"/extra"} onClick={() => props.changePage('/extra')} >Extra Exercise</Link>
			{/*<a onClick={() => props.changePage('/')}>Heroes</a>*/}
			{/*<a onClick={() => props.changePage('/movies')}>Movies</a>*/}
      {/*<a onClick={() => props.changePage('/theming')}>Theming</a>*/}
      {/*<a onClick={() => props.changePage('/extra')}>Extra Exercise</a>*/}
		</div>)
};

SideBar.propTypes = {
	changePage: PropTypes.func.isRequired,
};
