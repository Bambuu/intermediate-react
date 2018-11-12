// ASSIGNMENT ONE - LISTS AND KEYS

/*
EXERCISE A:
Inside your terminal, navigate to the "/part2" directory and type "npm run start"

You should see a list of superheroes pop up in your browser at localhost:3000

Tip: You might have to run "npm install" inside this directory if you get an error that packages are missing.
*/

/*
EXERCISE B:
We're missing a key in our list!
React warns you of this with a message like this:
    "Warning: Each child in an array or iterator should have a unique "key" prop.
    Check the render method of `HeroList`"

Open up your Developer Tools and make sure you can see the warning in the console.
*/

/*
EXERCISE C:

Let's try to go through the render() method of the HeroList. Spend a few minutes trying to understand what's
going on. you can find it in the file src/HeroList.js
When you're done, there's a step-by-step walkthrough just below:
 */
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

  // Here we return some JSX.
  return (
	<div>
	  <ul>
		{/* This first list element is just to create a header for the list */}
		<li className="hero-list-item hero-list-header">Awesome score - Hero name</li>
		{/* Here we render our list of heroes */}
		{heroComponents}
	  </ul>
	</div>
  );
}

/*
EXERCISE D:
  You need to add a "key" property to the <li> elements returned by our .map() function.
  A key should be unique. In our case, we can use the name of the hero, assuming nobody adds the same hero twice.
  When you add the key, the warning should disappear in your console.
  GUSTAV: WHERE TO DO THE CHANGE?

  An example of adding a key to a <li> element is below:
 */

const animalElements = ['elephant', 'zebra', 'giraffe']
  .map(animal => <li key={animal}>This animal is a {animal}</li>);