// ASSIGNMENT ONE - FORMS AND CONTROLLED COMPONENTS

/*
EXERCISE A:
Inside your terminal, navigate to the "/part1" directory and type "npm run start"

You should see a list of superheroes pop up in your browser at localhost:3000

Tip: You might have to run "npm install" inside this directory if you get an error that packages are missing.
*/

/*
EXERCISE B:
Let's make a form so we can add superheros! We want to be able to specify how

Find the render() function inside the HeroList. Inside the JSX, below the </ul>,
add a <form> element.

Inside the <form> element, add two <input> elements. The first one with type="number" and the second with type="text"
Like below:
*/
<form>
  <input type="number" />
  <input type="text"/>
</form>

/*
EXERCISE C:
You should now have two input elements, where you can enter things.
Let's make a button so we can submit our form.
Add a <button> inside the form.
If you click the button you will notice something strange - the page reloads!
*/

/*
EXERCISE D:
React forms behave like normal HTML forms, which submits some data
and then loads a new page. We'll want to implement our custom logic.

Create a function inside HeroList that's called "addSuperhero", it will take in an "event" as parameter.
To stop the default behaviour call 'event.preventDefault()' on the event parameter.

Add "this.addSuperHero" to the "onSubmit" attribute on the form element.

Ensure that when you submit your form now, nothing happens.
*/

/*
EXERCISE E:
To create the hero, we need to get the values the user type, into our state.

We do this by making our <input> components into 'controlled components'
What this means is that we keep their value inside the state of the component above them.

Add two new keys to the state, call them "awesomeInputValue" and "nameInputValue".
Have awesomeInputValue start as 0, and nameInputValue start as an empty string ""

Set the "value" prop of the <input/> element to the value of the state like this:
  value={this.state.awesomeInputValue}

Now the value is always the value in state. Try typing in the <input> components. Nothing changes!
*/

/*
Let's update our state when the user types something. We'll need to add onChange handlers to our input fields.
onChange handlers take in an event, and update the state with the new value. The below is an onChange handler
that updates the awesomeInputValue value in the state:
*/
onAwesomeInputChange = (event) => {
  this.setState({awesomeInputValue: event.target.value})
};
/*
EXERCISE D:
Implement an onAwesomeInputChange function like the one above, in your HeroList.
Pass it to the onChange attribute inside the first <input> element.

Ensure that your input field works when typing.
*/

/*
EXERCISE E:
Implement a onChange handler for the <input> component that corresponds to the nameInputValue as well.
*/

/*
Now we have two controlled components!
Every time the user types something, the onChange handler is called, and that updates
the state. Updating the state in turn, updates the text in the <input> component.

Now we can create a Superhero inside your addSuperHero method!

We can use setState to update the heroes array. Remember that you must never mutate the state directly.
Create a new hero array using 'concat()' with an object like this:
*/
addSuperHero = (event) => {
  event.preventDefault();

  const newSuperHero = {
    // You should read these from this.state in your application
    name: "The Terminator",
    awesome: "40"
  };

  // Concat takes an array and a value, and merges them into a new array.
  this.setState({
    heroes: this.state.heroes.concat(newSuperHero)
  })
};

/*
EXERCISE F:
Implement your addSuperHero, so that when the form is submitted, it will create a new SuperHero!
Make sure it appears on the list!
*/

/*
EXERCISE G
We don't want to accidentally add the same SuperHero twice! Inside addSuperHero, set the 'awesomeInputValue' and 'nameInputValue'
parts of the state, to their starting values: The number 0, and an empty string.
*/