import React, { Component } from 'react';
import { SideBar } from './SideBar';
import { Header } from './Header';
import { HeroList } from './HeroList';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="root">
					<SideBar />
					<div className="content">
					<Header />
					<Route path="/heroes" component={HeroList} />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
