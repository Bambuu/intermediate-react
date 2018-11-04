import React  from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeToggler = () => {
	return (
		<div>
			<ThemeContext.Consumer>
				{
					themeContext => {
						console.log(themeContext);
						return (
							<button onClick={themeContext.toggle}>Toggle theme!</button>
						)
					}
				}
			</ThemeContext.Consumer>
		</div>
	)
};
