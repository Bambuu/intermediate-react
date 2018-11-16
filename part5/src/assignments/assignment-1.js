// ASSIGNMENT 1 - FUNCTION AS A CHILD


// TODO: JEPPE REMOVE EXPLANATION?
/*
Let's take a look at the pattern called "function-as-a-child'
In React, a child is what's nested inside another element, e.g.

<div>
  I'm a proud dad
  <span> I'm a child of the div above! </span>
</div>

However..! The child of an element can also be a function, if the element expects it. An example.
<ComponentExpectingAFunctionAsChild>
  { () => { ...Your function in here...  } }
</ComponentExpectingAFunctionAsChild>

These functions can be multi-line, and often returns JSX, like below.

<ComponentExpectingAFunctionAsChild>
  { (value) => {
    return <div>I'm returned from this function. I got the parameter {value} </div>
    }
  }
</ComponentExpectingAFunctionAsChild>

Functions like this are usually passed down a parameter of some kind from its parent.
*/

/*
EXERCISE A:

Let's get used to the syntax.
We've created a TestRenderProp class that uses the render prop pattern,
inside 'not-important/utils'

 - Import it somewhere inside your HeroList.
 - Use it somewhere inside your render JSX.
 - Copy-paste the following code in, as the child:
    {(params) => {console.log(params)}}

You're done when you see "Hello from RenderProp" in your console.
(You might see it multiple times, don't worry about that)
*/


/*
EXERCISE B:
Let's change our function, to instead of logging to the console,
return some JSX.

Have your function as a child return a <p></p> with the parameter it received from the
render prop component.
You're done when you see the text "Hello from RenderProp" in the browser window.
 */

/*
EXERCISE C:
Well done. You're done with the TestRenderProp component now. Feel free
to remove it from the HeroList.
*/