import React, { Component } from 'react';
import { initialHeroes } from './heroes';

export class HeroList extends Component {
	state = {
		evil: 0,
		name: '',
		heroes: initialHeroes
	};
	
	ref = React.createRef();
	
	componentDidMount(){
		this.ref.current.focus();
	}
	
	changeEvilValue = (e) => {
		this.setState({
			evil : e.target.value,
		});
	};
	
	changeName = (e) => {
		this.setState({
			name : e.target.value,
		});
	};
	
	createSuperHero = (e) => {
		e.preventDefault(); // No page changes
		const newHero = {
			name: this.state.name,
			evil: this.state.evil,
		};
		this.setState({
			heroes: [...this.state.heroes, newHero],
			name: 0,
			evil: 0,
		});
		
		// Focus back on the evil input
		this.ref.current.focus();
	};
	
	
	render() {
		return (
			<div>
				<ul>
					{this.state.heroes.map(hero => <li className="hero-list-item" key={hero.name}>{hero.evil} - {hero.name}</li>)}
				</ul>
				<form onSubmit={this.createSuperHero}>
					<input ref={this.ref} value={this.state.evil} onChange={this.changeEvilValue} type="number"/>
					<input value={this.state.name} onChange={this.changeName} type="text" />
					<button>Create</button>
				</form>
			</div>);
	}
}
