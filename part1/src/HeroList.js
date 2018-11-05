import React, { Component } from "react";
import { initialHeroes } from "./not-important/heroes";

export class HeroList extends Component {
  state = {
    heroes: initialHeroes,
    awesomeInputValue: '',
    nameInputValue: '',
  };

  addSuperHero = (event) => {
    event.preventDefault()
  };

  render() {
    const copyOfHeroArray = this.state.heroes.slice();
    const sortedHeroes = copyOfHeroArray.sort((hero, secondHero) => hero.awesome - secondHero.awesome);

    const heroComponents = sortedHeroes
      .map(hero => <li className="hero-list-item" key={hero.name}>{hero.awesome} - {hero.name}</li>);

    return (
      <div>
        <ul>
          <li className="hero-list-item hero-list-header">Awesome score - Hero name</li>
          {heroComponents}
        </ul>
        <form onSubmit={this.addSuperHero}>
          <input value={this.state.awesomeInputValue} type="number" />
          <input value={this.state.nameInputValue} type="text"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
