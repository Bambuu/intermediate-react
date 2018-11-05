import React from 'react';

const lightTheme = {
	sidebarColor: "#ff2e51",
	buttonColor: '#003aff',
};

const darkTheme = {
	sidebarColor: "#340911",
	buttonColor: '#003aff',

};

export const ThemeContext = React.createContext(lightTheme);

export class ThemeContextProvider extends React.Component {
	
	
	toggleTheme = () => {
		console.log('toggling theme babyy');
		if (this.state.theme === lightTheme){
			this.setState({
				theme : darkTheme,
			})
		} else {
			this.setState({
				theme: lightTheme,
			})
		}
	};
	
	state = {
		theme: lightTheme,
		toggle: this.toggleTheme,
	};
	
	render() {
		console.log('rerendering themeprovider');
		return (
			<ThemeContext.Provider value={this.state}>
				{this.props.children}
			</ThemeContext.Provider>
	)
	}
}
