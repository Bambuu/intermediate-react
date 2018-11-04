import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

export class SideBar extends Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{
					themeContext => (
						<div className="sidebar" style={{backgroundColor: themeContext.theme.sidebarColor}}>
							<Link to="/heroes">Heroes</Link>
							<Link to="/movies">Movies</Link>
							<Link to="/theme">Theming</Link>
						
						
						</div>)
				}
			</ThemeContext.Consumer>
		)
	}
}
