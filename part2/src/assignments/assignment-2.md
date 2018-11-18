# ASSIGNMENT TWO - FORMS AND CONTROLLED COMPONENTS

## EXERCISE A:
Let's make a form so we can add superheroes!

Find the render() function inside the HeroList. Inside the JSX, below the `</ul>`,
add a `<form>` element with two `<input>` elements, like below.

```html
<form>
  <input type="number" />
  <input type="text"/>
</form>
```

## CONTROLLED COMPONENTS:
How do we access the values of these input fields?

We do this by making our `<input>` components into 'controlled components'
This means two things:
1. We keep their value inside the state of the component above them.
2. When the user types, we update the state. This causes the input component to update its value

## EXERCISE B:
Add two new keys to the state, call them `awesomeInputValue` and `nameInputValue`.
Have `awesomeInputValue` start as 0, and `nameInputValue` start as an empty string ""

Set the `value` prop of the first `<input/>` element to the value of the new state you just created,
like this:
```js
value={this.state.awesomeInputValue}
```
You'll get an error saying that the component won't ever update. That's because
the value in state never changes. 
Try typing in the `<input>` component - nothing happens.

## EXERCISE C:
Let's update our state when the user types something.
We'll need to add onChange handlers to our input fields.
onChange handlers receive an event. They can read the current value of the input field via
`event.target.value`

Below is an example of an onChange handler that updates `awesomeInputChange`
```js
onAwesomeInputChange = (event) => {
  this.setState({awesomeInputValue: event.target.value})
};
```

Implement an `onAwesomeInputChange` function like the one above, in your HeroList.
Pass it to the `onChange` attribute inside the first ``<input>`` element.

Ensure that your input field works when typing.

## EXERCISE D
Implement the same thing for the other `<input>` component that corresponds to the `nameInputValue` as well.

## EXERCISE E:
You should now have two controlled input elements.
Let's make a button so we can submit our form.
Add a `<button>` inside the form.
If you click the button you will notice something strange - the page reloads!

## EXERCISE F:
React forms behave like normal HTML forms, which submits some data
and then loads a new page. We'll want to implement our custom logic.

Create a function inside HeroList that's called `addSuperhero`, it will take in an `event` as parameter.
To stop the default behaviour call `event.preventDefault()` on the event parameter.

Add `this.addSuperHero` to the `onSubmit` attribute on the form element.

Ensure that when you submit your form now, nothing happens.

## EXERCISE G:
Let's create a superhero inside our `addSuperHero` method

We can use `setState` to update the heroes array. Remember that you must never mutate the state directly.
We can create a new hero array using `concat()` with an object like this:

```js
addSuperHero = (event) => {
  event.preventDefault();

  const newSuperHero = {
    // You should read these from this.state in your application
    name: "The Terminator",
    awesome: "40"
  };

  // concat takes an array and a value, and merges them into a new array.
  this.setState({
    heroes: this.state.heroes.concat(newSuperHero)
  })
};
```

## EXERCISE H:
Implement your addSuperHero, so that when the form is submitted, it will create a new SuperHero!
Check that it appears on the list!

## EXERCISE I:
We don't want to accidentally add the same SuperHero twice! Inside addSuperHero, reset the `awesomeInputValue` and `nameInputValue`
parts of the state, to their starting values.
