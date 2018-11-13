// ASSIGNMENT 1 - FUNCTION AS A CHILD

/*
Let's take a look at the pattern called "function-as-a-child'
In React, a child is what's nested inside another element, e.g.

<div>
  I'm a proud dad
  <span> I'm a child of the div above! </span>
</div>

However..! The child of an element can also be a function, if the element expects it. An example.

<ComponentExpectingAFunctionAsChild>
  { (value) => {
    return <div>I'm returned from this function. I got the parameter {value} </div>
    }
  }
</ComponentExpectingAFunctionAsChild>

It's a normal ES6 arrow function that returns some JSX.
It's usually passed down a parameter of some kind from its parent.
*/

/*
EXERCISE A:

Let's get used to the syntax.
We've created a TestRenderProp class that uses the render prop pattern,
inside 'not-important/utils'

 - Import it somewhere inside your HeroList.
 - Use it somewhere inside your render JSX.
 - Have it take the following function as a child.
    {props => console.log(props)}

You're done when you see "Hello from RenderProp" in your console.
 */


/*
EXERCISE B:
Let's change our function, to instead of logging to the console,
return some JSX.

Have your function as a child return a <p></p> with the props it received from the
render prop component.
You're done when you see the text "Hello from RenderProp" in the browser window.
 */

/*
EXERCISE C:
Well done. You're done with the TestRenderProp component now. Feel free
to remove it from the HeroList.
*/