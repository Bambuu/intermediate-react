# EXTRA ASSIGNMENT 1 - DEFAULT ROUTES AND HIGHER ORDER COMPONENTS

# EXERCISE A:
Let's look at the Header. We want it to show the current url.

Luckily we can tap into this information, with a Higher-Order Component!

Inside `Header.js` import the `withRouter` HOC

# EXERCISE B
Let's export the Header with the withRouter Higher Order Component.

We've only done this with class based components before, but it works exactly the same
way with a functional component.

As a reminder, this involves

- Renaming the component
- Removing the original export
- Creating a new export line, where the "withRouter" HOC is applied.

*(Look at HeroList and withScroll for inspiration if you need it)*

# EXERCISE C
withRouter gives us the location info as props, inside `Header`:

- Have the Header take in `props` as a parameter
- `console.log()` the props.

Try navigating around - you'll see the Header gets new props
whenever a link is clicked.

# EXERCISE D
Let's have the header display our current relative position.
*(So if we're at "localhost:3000/heroes" it should display "/heroes")*

Have a look at the props you're receiving from `withRouter`
to figure out how to accomplish this.

Make sure it shows correctly on all the pages.
