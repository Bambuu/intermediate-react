// ASSIGNMENT 3 - TYING IT ALL TOGETHER

// In this section we'll look at submitting the form.

/*
EXERCISE A:
Create a <button> inside the FormController, and click it.
Buttons inside form submit the form by default.
When you do this, you will get an error.
*/

/*
EXERCISE B:
This is because the FormController requires the prop "onSubmit" to be a function.
GUSTAV: WHY? A FUNCTION THAT DOES WHAT?
- Create a function inside the HeroList class called "handleFormSubmit" - have it take in one parameter,
  and console.log it.
- Set onSubmit to be "this.handleFormSubmit"

When you click your button, you should see the value of the input fields
in your console.

(Note that the form will reset after each submission, so the <input> values will
reset to their initialValue
*/

/*
EXERCISE C:
Now that we have both an "awesome" and a "name" from our form,
we can create a new Superhero!

Rewrite "handleFormSubmit" to create a new superhero. Take inspiration
in "addSuperHero", but notice you don't manually need to keep track of
the "nameInputValue" and "awesomeInputValue" parts of the state
*/

/*
GUSTAV: COULD BE EXTRA
EXERCISE D
Notice how we've actually replicated all of the behaviour of our previous form, with this new FormController.
Except for the refs!

GUSTAV: ALSO REMOVE IT FROM THE ORIGINAL?
  - Attach "this.ref" to the first <input> field of the new form instead.
  - Make sure to call this.ref.current.focus() inside handleFormSubmit
*/

/*
EXERCISE E:
Let's set the initialValues to something more sensible than "MyHeroName" and 999.
Set the initial name of a superhero to an empty string, and the initial awesome to 0
*/

/*
EXERCISE F:
Alright! Now let's clean up our old form behaviour.

- Remove the old form from the render method
- remove "awesomeInputValue" and "nameInputValue" from the state
- delete the "addSuperHero" method
- delete the "onAwesomeInputChange" method
- delete the "onNameInputChange" method

GUSTAV: UNNECESSARY IMO
"addSuperHero" was a better name than 'handleFormSubmit' though.
Let's rename our "handleFormSubmit" to "addSuperHero"

Make sure everything still works, and then be a little impressed with
yourself. You've managed to remove a *lot* of boilerplate code, by using
render props.

GUSTAV: ...BECAUSE WE HAVE REFACTORED THE BEHAVIOR INTO A SHARED COMPONENT BLA BLA BLA
*/