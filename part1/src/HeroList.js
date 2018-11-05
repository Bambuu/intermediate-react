import React, { Component } from "react";
import { initialHeroes } from "./not-important/heroes";

export class HeroList extends Component {
  state = {
    heroes: initialHeroes,
    awesomeInputValue: 0,
    nameInputValue: '',
  };

  addSuperHero = (event) => {
    event.preventDefault();

    const newSuperHero = {
      name: this.state.nameInputValue,
      awesome: this.state.awesomeInputValue
    };

    this.setState({
      heroes: this.state.heroes.concat(newSuperHero),
      nameInputValue: '',
      awesomeInputValue: 0,
    })
  };

  onAwesomeInputChange = (event) => {
    this.setState({
      awesomeInputValue: event.target.value,
    })
  };

  onNameInputChange = (event) => {
    this.setState({
      nameInputValue: event.target.value,
    })
  };

  render() {
    const copyOfHeroArray = this.state.heroes.slice();
    const sortedHeroes = copyOfHeroArray.sort((hero, secondHero) => hero.awesome - secondHero.awesome);

    const heroComponents = sortedHeroes
      .map(hero => <li className="hero-list-item">{hero.awesome} - {hero.name}</li>);

    return (
      <div>
        <ul>
          <li className="hero-list-item hero-list-header">Awesome score - Hero name</li>
          {heroComponents}
        </ul>
        <form onSubmit={this.addSuperHero}>
          <input value={this.state.awesomeInputValue} onChange={this.onAwesomeInputChange} type="number" />
          <input value={this.state.nameInputValue} onChange={this.onNameInputChange} type="text"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
