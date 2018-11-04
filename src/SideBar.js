import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SideBar extends Component {
	render() {
		return <div className="sidebar">
			<Link to="/">Heroes</Link>
			<Link to="/movies">Movies</Link>
			<Link to="/theme">Theming</Link>
			
			
		</div>
	}
}
