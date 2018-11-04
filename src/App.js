import React, { Component } from 'react';
import { SideBar } from './SideBar';
import { Header } from './Header';
import { HeroList } from './HeroList';

class App extends Component {
	render() {
		return (
			<div>
				<SideBar />
				<Header />
				<HeroList/>
			</div>
		);
	}
}

export default App;
