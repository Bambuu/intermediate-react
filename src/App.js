import React, { Component } from 'react';
import { SideBar } from './SideBar';
import { Header } from './Header';
import { HeroList } from './HeroList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeContextProvider } from './ThemeContext';
import { ThemeToggler } from './ThemeToggler';

class App extends Component {
	render() {
		return (
			<ThemeContextProvider>
				<BrowserRouter>
					<div className="root">
						<SideBar />
						<div className="content">
							<Header />
							<Switch>
								<Route path="/heroes" component={HeroList} />
								<Route path="/theme" component={ThemeToggler} />
							</Switch>
						</div>
					</div>
				</BrowserRouter>
			</ThemeContextProvider>
		);
	}
}

export default App;
