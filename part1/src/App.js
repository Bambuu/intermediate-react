import React, { Component } from 'react';
import { SideBar } from './SideBar';
import { Header } from './Header';
import { HeroList } from './HeroList';

class App extends Component {
	render() {
		return (
			<div className="root">
				<SideBar />
				<div className="content">
					<Header />
					<HeroList />
				</div>
			</div>
		);
	}
}

export default App;
