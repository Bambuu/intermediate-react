import React, { Component } from "react";
import { initialHeroes } from "./not-important/heroes";
import {withScroll} from 'react-fns'
import { calculateBackgroundColor } from './not-important/utils';
import { FormController } from "./not-important/FormController";

class BaseHeroList extends Component {
  state = {
    heroes: initialHeroes,
  };

  addSuperHero = (formValues) => {
    const newSuperHero = {
      name: formValues.name,
      awesome: formValues.awesome,
    };

    this.setState({
      heroes: this.state.heroes.concat(newSuperHero)
    });
  };

  render() {
    const copyOfHeroArray = this.state.heroes.slice();
    const sortedHeroes = copyOfHeroArray.sort(
      (hero, secondHero) =>
        hero.awesome - secondHero.awesome
    );

    const heroComponents = sortedHeroes.map(hero => (
      <li className="hero-list-item" key={hero.name}>
        {hero.awesome} - {hero.name}
      </li>
    ));

    return (
      <div className="tall-div" style={{backgroundColor: calculateBackgroundColor(this.props.y)}}>
        <ul>
          <li className="hero-list-item hero-list-header">
            Awesome score - Hero name
          </li>
          {heroComponents}
        </ul>

        <FormController initialValues={{name: '', awesome: 0}} onSubmit={this.addSuperHero}>
          {(formValues) => {
            return (<div>
                <input value={formValues.awesome.value} onChange={formValues.awesome.onChange} type="number"/>
                <input value={formValues.name.value} onChange={formValues.name.onChange}/>
                <button>Submit</button>
            </div>
            )
          }}
        </FormController>
      </div>
    );
  }
}

export const HeroList = withScroll(BaseHeroList);
