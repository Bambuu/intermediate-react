import React, { Component } from 'react';
import { initialHeroes } from './heroes';
import { withScroll } from 'react-fns';
import { calculateBackgroundColor } from './utils';

class HeroListClass extends Component {
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
	
	createSuperHero = (e, save) => {
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
		const heroList = [... this.state.heroes]
			.sort((hero, secondHero) => hero.evil - secondHero.evil)
			.map(hero => <li className="hero-list-item" key={hero.name}>{hero.evil} - {hero.name}</li>)
		
		return (
			<FormThingy keys={{evil: 0, name: ''}}>
				val => (
				<div style={calculateBackgroundColor(document.body.clientHeight, this.props.y)}>
					<ul>
						{heroList}
					</ul>
					<form onSubmit={this.createSuperHero}>
						<input ref={this.ref} value={val.evil} onChange={val.changeEvil} type="number"/>
						<input value={val.name} onChange={val.changeName} type="text" />
						<button>Create</button>
					</form>
				</div>
			)
			
			</FormThingy>
				);
	}
}

export const HeroList = withScroll(HeroListClass);
