import React, { Component } from 'react';
import { initialHeroes } from './not-important/heroes';
import { withScroll } from 'react-fns';
import { calculateBackgroundColor } from './not-important/utils';
import { FormController } from './not-important/FormController';

class HeroListClass extends Component {
	state = {
		heroes: initialHeroes
	};
	
	ref = React.createRef();
	
	componentDidMount(){
		this.ref.current.focus();
	}
	
	createSuperHero = (values) => {
		const newHero = {
			name: values.name,
			evil: values.evil,
		};
		this.setState({
			heroes: [...this.state.heroes, newHero],
		});
		
		// Focus back on the evil input
		this.ref.current.focus();
	};
	
	
	render() {
		const heroList = [... this.state.heroes]
			.sort((hero, secondHero) => hero.evil - secondHero.evil)
			.map(hero => <li className="hero-list-item" key={hero.name}>{hero.evil} - {hero.name}</li>)
		
		return (
				<div style={calculateBackgroundColor(document.body.clientHeight, this.props.y)}>
					<ul>
						<li className="hero-list-item hero-list-header">Evil score - Hero name</li>
						{heroList}
					</ul>
					<FormController initialState={{evil: 0, name: ''}} onSubmit={this.createSuperHero}>
						{ form => (
							<div>
								<input ref={this.ref} value={form.evil.value} onChange={form.evil.onChange} type="number"/>
								<input value={form.name.value} onChange={form.name.onChange} type="text" />
								<button>Create</button>
							</div>
						)
						}
					</FormController>
				</div>
			);
	}
}

export const HeroList = withScroll(HeroListClass);
