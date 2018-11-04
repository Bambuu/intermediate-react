import React, { Component } from 'react';
import { initialHeroes } from './not-important/heroes';
import { withScroll } from 'react-fns';
import { calculateBackgroundColor } from './not-important/utils';
import { FormController } from './not-important/FormController';

class HeroListClass extends Component {
	state = {
		heroes: initialHeroes
	};
	
	render() {
		const sortedHeroes = [... this.state.heroes]
			.sort((hero, secondHero) => hero.evil - secondHero.evil);
		
		const heroComponents = sortedHeroes
			.map(hero => <li className="hero-list-item" key={hero.name}>{hero.evil} - {hero.name}</li>)
		
		return (
				<div style={calculateBackgroundColor(document.body.clientHeight, this.props.y)}>
					<ul>
						<li className="hero-list-item hero-list-header">Evil score - Hero name</li>
						{heroComponents}
					</ul>
					
					<form onSubmit={(e) => e.preventDefault()}>
						<input type="number"/>
						<input type="text" />
						<button>Create</button>
					</form>
				</div>
			);
	}
}

export const HeroList = withScroll(HeroListClass);
