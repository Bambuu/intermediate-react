/* eslint-disable */
import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export const SideBar = (props) => {
	return (
		<div className="sidebar">
			{/*<Link to={"/heroes"} />*/}
      {/*<Link to={"/movies"} />*/}
      {/*<Link to={"/theming"} />*/}
      {/*<Link to={"/extra"} />*/}
			<a onClick={() => props.changePage('/')}>Heroes</a>
			<a onClick={() => props.changePage('/movies')}>Movies</a>
      <a onClick={() => props.changePage('/theming')}>Theming</a>
      <a onClick={() => props.changePage('/extra')}>Extra Exercise</a>
		</div>)
};

SideBar.propTypes = {
	changePage: PropTypes.func.isRequired,
};
