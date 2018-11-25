import React, { Component } from "react";
import { initialHeroes } from "./not-important/heroes";

export class HeroList extends Component {
  state = {
    heroes: initialHeroes
  };

  render() {
    // Here we create a copy of the array in state, using slice(). Normally this is not needed but..
    const copyOfHeroArray = this.state.heroes.slice();
    // We want to sort the array! The JavaScript .sort() method does not return a new array
    // but changes the old one. As we're not allowed to modify state, we need the copy for above.
    // The specifics of sort isn't important - but it sorts the hero after their awesome score.
    const sortedHeroes = copyOfHeroArray.sort((hero, secondHero) => hero.awesome - secondHero.awesome);

    // Here we use map to turn our array of heroes, into an array of React Components!
    // Which we can then render in the JSX using {}'s
    const heroComponents = sortedHeroes
      .map(hero => <li className="hero-list-item">{hero.awesome} - {hero.name}</li>);

    return (
      <div className="tall-div">
        <ul>
          <li className="hero-list-item hero-list-header">Awesome score - Hero name</li>
          {heroComponents}
        </ul>
      </div>
    );
  }
}
