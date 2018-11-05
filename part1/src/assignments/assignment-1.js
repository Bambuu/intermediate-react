// ASSIGNMENT ONE - FORMS AND CONTROLLED COMPONENTS

/*
EXERCISE A:
Make sure the app runs.
Inside your terminal, navigate to the "/part1" directory and type "npm run start"

You should see a list of superheroes pop up in your browser at localhost:3000

Tip: You might have to run "npm install" inside this directory if you get an error that packages are missing.
*/

/*
EXERCISE B:
Let's make a form so we can add superheros! We want to be able to specify how

Find the render() function inside the HeroList. Inside the JSX returned,
add a <form> element.

Inside the <form> element, add two <input> elements. The first one with type="number" and the second with type="text"
*/

/*
EXERCISE C:
You should now have two input elements, where you can enter things.
Let's try making a button so we can submit our form as well.
Add a <button> inside the form. Buttons inside forms automatically submit the form when clicked.
If you click the button you will notice something strange - the page reloads!
*/

/*
EXERCISE D:
That's not what we want at all ! React forms behave like normal HTML forms, which submits some data to a page
and then loads a new page. We'll want to implement our custom logic.

Create a function inside heroList that's called "addSuperhero", it will take in an "event" as parameter.
To stop the default behaviour call 'event.preventDefault()' on the event parameter.

Ensure that when you submit your form now, nothing happens.
*/

/*
EXERCISE E:
But how do we actually create the hero? We need to get the information from our input elements, into our state.

We do this by making them 'controlled components' - what this means is that we keep their value inside the state
of the component above them.

Add two new keys to the state, call them "awesomeInputValue" and "nameInputValue"
Set the "value" prop of the input element to the value of the state like this
  value={this.state.awesomeInputValue}

Now the value is always the value in state. Try typing in the <input> components. Nothing changes!
*/

/*
Let's update our state when the user types something. We'll need to add onChange handlers to our input fields.
onChange handlers take in an event, and update the state with the new value. It could look like this:
*/
onAwesomeInputChange = (e) => {
  this.setState({awesome: e.target.value})
};
/*
EXERCISE D:
Implement an onAwesomeInputChange function like the one above, in your HeroList.
Pass it to the onChange handler inside the <input> element.

Ensure that your input field works when typing.
*/

/*
EXERCISE E:
Implement a onChange handler for the <input> component that holds the "name" as well.
*/

/*
Now we're back where we started. The difference is now we have two controlled components, which means
React will handle the state. Every time the user types something, the onChange handler is called, and that updates
the state. Updating the state in turn, updates the text in the <input> component.
*/

/*
Now we can create a Superhero!
Go back to your old addSuperHero method. Here we will want to use setState
to create a new hero.

We can use setState to update the heroes array. Remember that you must never mutate the state directly.
Create a new hero object using 'concat()' like this:
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
parts of the state, to empty strings.
*/