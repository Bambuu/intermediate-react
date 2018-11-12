/*
 EXTRA-EXERCISE

 Let's try implementing our own Higher Order Component!
 We'll try reimplementing the withScroll HOC from the previous exercise.
*/

/*
EXERCISE A
Go into the App.js file. At the top, import the ExtraAssignment component from this file.

Inside the render method, if "this.state.currentPage === '/extra'" is true, then render the <ExtraAssignment/>
component.

Now if you click the "Extra Exercise" on the sidebar, the component below should show up.
*/

/*
EXERCISE B:
A HOC is a function that takes in a Component and returns another one.
The first step is to create a function that takes in a component, and returns the same component

- Take in "WrappedComponent" as a parameter in withScroll
- Return "WrappedComponent" without doing nothing to it.
*/

/*
EXERCISE C:
Let's make sure to export the HOC component, and not the one from before
- Rename ExtraAssignment to BaseExtraAssignment
- Remove the export in front of the class
- To the end, add:
  const = withScroll(BaseExtraAssignment)

Ensure it still renders.
*/

/*
Note here that components aren't very "magic"
We can take components in as parameters, and return them from
functions.

However, how do we *do* something with the component?
The answer is - we don't! We return a *new* component that
wraps the old one.

EXERCISE D:
From your withScroll return an arrow function, that returns
the JSX(!) for the Component, surrounded with a
<div>

Use inline styles to give the div a backgroundColor,
just to convince yourself it's actually there.
*/

/*
What you've done here is exactly the same as creating the functional component:
const MyHOC = () => {
  return <div><BaseExtraAssignment/></div>
}

However, the HOC you've written works for any
component!
*/

/*
EXERCISE E:
We want our HOC component to have State though, so we'll need to export a class
based component!

Luckily JavaScript lets us define classes dynamically.

Let's ignore the WrappedComponent for now.
Inside your withScroll function define a class:

Tip: If you're confused, just define it exactly the way BaseExtraAssignment is
defined below.

Return this class you've just created.
*/


/*
EXERCISE F:
Now, let's do something with the WrappedComponent inside our HOC.

Inside the render method, render the <WrappedComponent/>
*/

/*
Now we
*/



import * as React from "react";

const withScroll = (WrappedComponent) => {
  // How to do this..??
  class Foo extends React.Component{
    render(){
      return <div>
        <WrappedComponent/>
      </div>
    }
  }
  return Foo;
};

export class BaseExtraAssignment extends React.Component {

  render(){
    return <h1>Extra Assignment 2: Build-a-HOC</h1>
  }
}

export const ExtraAssignment = withScroll(BaseExtraAssignment);