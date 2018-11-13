// ASSIGNMENT 2 - DEFAULT ROUTES AND HIGHER ORDER COMPONENTS

/*
EXERCISE A
It's time for a little spring cleaning.
Remove everything related to the old way of managing links
 - The state key in App
 - The commented out if-statements in App
 - The changePage function in app
 - The changePage props passed down to SideBar
 - The propType in SideBar
*/

/*
After this, you should have a functional navigation, with
routes and links.
The index route at '/' still doesn't work, but we'll
look at that in the extra exercises.
*/

/*
EXERCISE B:
Let's look at the Header. We want it to show the current url.

Luckily we can tap into this information, with a Higher-Order Component!

Inside Header.js import the "withRouter" HOC
*/

/*
EXERCISE C
Let's export the Header with the withRouter Higher Order Component.
We've only done this with class based components before, but it works exactly the same
way with a functional component.

As a reminder, this involves
- Renaming the component
- Removing the original export
- Creating a new export line, where the "withRouter" HOC is applied.

(Look at HeroList and withScroll for inspiration if you need it)
*/

/*
EXERCISE D
We get the location info inside props in the Header.

Have the Header take in props as a parameter
console.log() the props.

Try navigating around - you'll see the Header gets new props
whenever a link is clicked.
*/

/*
EXERCISE E
Let's have the header display our current relative position.
(So if we're at "localhost:3000/heroes" it should display "/heroes")

Have a look at the props you're getting, to figure out what you should
use to render this inside the header.

Make sure it shows correctly on all the pages.
*/