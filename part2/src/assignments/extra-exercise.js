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

It expects two props: 'prop1' and 'prop2' - feel free to give them any value you want.

Now if you click the "Extra Exercise" on the sidebar, the component below should show up.
Make sure that both props are displayed.
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
Let's make sure to export the HOC component.
- Rename ExtraAssignment to BaseExtraAssignment
- Remove the export in front of the class
- Below everything, add:
  export const ExtraAssignment = withScroll(BaseExtraAssignment)
*/

/*
Note here that components aren't very "magic"
We can take components in as parameters, and return them from
functions.

However, how do we *do* something with the component?
The answer is - we don't! We return a *new* component that
wraps the old one.

EXERCISE D:
GUSTAV: MAYBE TOO CONVOLUTED??!
From your withScroll return an arrow function, that returns
the WrappedComponent as JSX(!), surrounded with a
<div>

Use inline styles to give the div a backgroundColor,
just to convince yourself it's actually there.

(You'll notice that the props have disappeared, we'll deal with them later)
*/

/*
What you've done here is exactly the same as creating the functional component:
const MyHOC = () => {
  return <div><BaseExtraAssignment/></div>
}

However, the HOC you've written works for any
component!

Notice that the component we've outlined above doesn't take in any props,
nor does it pass props to the <BaseExtraAssignment>

The correct component we want to define is this:
const MyHOC = (props) => {
  return <div><BaseExtraAssignment {...props} /></div>
}

Notice we take in props, and pass in all the props we're given to the BaseExtraAssignment,
this allows us to use this HOC, just like we would the BaseExtraAssignment, giving it the same props and all
(
  If you're confused by the {...props} line, it's a spread operator.
  Feel free to ask about it - you can also read more info here:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
)


EXERCISE E:
Rewrite our HOC to pass down props as well. Have the function you return take in props, and use
the spread operator to pass them all to the WrappedComponent.
Ensure the component still works, and the props are now displayed. Notice that to the rest of the world (ie. in App),
they can't tell this is a HOC at all!
*/

/*
EXERCISE F:
We want our HOC component to have state though, so we'll need to export a class
based component!

Luckily JavaScript lets us define classes dynamically.

Let's ignore the WrappedComponent for now.
Inside your withScroll function define a class, call it "OuterComponent":

Tip: If you're confused, just define it exactly the way BaseExtraAssignment is
defined below.

Return this class you've just created.
GUSTAV CONFUSING TO IGNORE WHAT WEVE ALREADY DONE? MAYBE JUST CLASS FROM THE BEGINNING
*/

/*
EXERCISE G:
Now, let's do something with the WrappedComponent inside our HOC.

Inside the render method of our OuterComponent, render the <WrappedComponent/>

Make sure to pass {...this.props} to it.

Ensure it works.
*/

/*
Now we've actually got a proper class-based Higher-Order Component. We can do anything with this
component we'd normally do, including setting state, and getting props.

Let's pass some extra props to our WrappedComponent. Let's just start off by hard-coding the props "x" and "y"

EXERCISE H:
Render the WrappedComponent like this:
<WrappedComponent x={0} y={0} {...props} />

Display both the x and the y prop inside the BaseExtraAssignment
*/

/*
EXERCISE I:

Now all that's left to do, is get the scroll position into the state, and pass that as the x and y
props. This is exactly like we implemented it in part 1

In the OuterComponent:
- Create x and y in the state, set them to 0 to start
- Create a scrollHandle function inside the class.
- Have the scrollHandle function, set the state to window.scrollX and window.scrollY
- Attach a scrollListener in componentDidMount
- Stop listening in componentWillUnmount
- Pass the x and y of the state, down into the wrappedComponent
 */

/*
Now you've (basically) implemented the withScroll component of react-fns.
If you want, you can try using your withScroll on the HeroList, to see if it works.
 */

import * as React from "react";

const withScroll = WrappedComponent => {
	return class OuterComponent extends React.Component {
		state = {
			x: 0,
			y: 0
		}
		scrollHandle = () => {
			this.setState({x: window.scrollX, y: window.scrollY})
		}
		componentDidMount() {
			window.addEventListener('scroll', this.scrollHandle)
		}
		componentWillUnmount() {
			window.removeEventListener('scroll', this.scrollHandle)
		}
		render() {
			return <WrappedComponent x={this.state.x} y={this.state.y} {...this.props}/>
		}
	}
};

class BaseExtraAssignment extends React.Component {
  render() {
    return (
      <div style={{height: '2000px', width: '2000px'}}>
        <h1>Extra Assignment 2: Build-a-HOC</h1>
        <p>
          I've got some props: {this.props.x}{" "}
          {this.props.y}{" "}
        </p>
      </div>
    );
  }
}

export const ExtraAssignment = withScroll(
  BaseExtraAssignment
);
