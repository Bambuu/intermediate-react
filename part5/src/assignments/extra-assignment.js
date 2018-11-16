// EXTRA ASSIGNMENT : Creating A Render Prop

/*
Let's take a look at creating a Render Prop. Conceptually, render props are
very simple to create, as they're just components.
*/

/*
The first thing we'll need to do, is learn how to work with children in JSX.
By children I mean "nested" JSX elements, like described in Exercise 1.

Go into ExtraAssignment.js
You'll see an ExtraAssignment class and a RenderPropComponent class.
Notice how RenderPropComponent is passed a child, but the child is never displayed.

<RenderPropComponent>
          <div> I'm a child of RenderPropComponent ! </div>
</RenderPropComponent>

In React, a component receives the children through a prop called "children"
 - and then it can decide what to do with it.
In our case, RenderPropComponent decided to do nothing.
*/

/*
EXERCISE A:
Have the RenderPropComponent display the children it is given.
You can render the JSX elements using curly braces.
*/

/*
EXERCISE B:
The "children" prop isn't very different from other props.
The only real difference is that, whatever's between the
JSX tags, is automatically assigned to "children"

Let's convince ourselves of that:
Inside ExtraAssignment, add the child as a regular prop called "children"
instead of as a "regular" child.
Like this:
<RenderPropComponent children={ ... jsx here ... }>
</RenderPropComponent>

When you make this work, revert it back to how it was before. While
you can use "children" like this, it's very rarely done.
*/

/*
EXERCISE C:
We need to pass some information to our children. And as we've seen,
"children" is just a prop like any other. Props can be elements, booleans
and.. functions.

Let's convert the child into a function
- This is a JS expression, so we'll need surrounding {}'s
- Inside the curly braces, create a function that returns some JSX.

This should compile, but the children should not be rendered.
*/

/*
EXERCISE D:
That's because right now we're telling React to render a function,
and it doesn't know what to do with that. Let's tell it to render
the *result* of a function.

In RenderPropComponent change
{this.props.children}
to
{this.props.children()}

Now your children should be rendered!
*/

/*
EXERCISE E
Render props first start getting really fun when we can pass
props down to them though.

- Inside RenderPropComponent, pass a string down to the "children" function
- Inside ExtraAssignment, have the arrow function take in a parameter,
  and use that inside the rendered output

You're done when you see the string you defined in your RenderPropComponent,
in the output from your ExtraAssignment component.
*/

/*
That's how you implement the render-prop pattern. In the extra-exercises where you
learn how to implement a Higher-Order Component, we skipped over some of the more hairy
details. But not this time. This is really all there is to it.
*/

/*
EXERCISE F
Of course, passing static props down isn't that interesting. If there's still time left,
you can try implementing a Render-prop component that keeps track of the scroll position, and
passes it down to the children-function.

You can take inspiration from how this was implemented in Part 3.

*/
