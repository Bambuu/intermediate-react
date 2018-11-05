import React, { Component } from 'react';
import { initialHeroes } from './not-important/heroes';

export class HeroList extends Component {
	state = {
		heroes: initialHeroes
	};
	
	render() {
		const sortedHeroes = [...this.state.heroes]
			.sort((hero, secondHero) => hero.awesome - secondHero.awesome);
		
		const heroComponents = sortedHeroes
			.map(hero => <li className="hero-list-item" key={hero.name}>{hero.awesome} - {hero.name}</li>);
		
		return (
			<div>
				<ul>
					<li className="hero-list-item hero-list-header">Awesome score - Hero name</li>
					{heroComponents}
				</ul>
			</div>
		);
	}
}
