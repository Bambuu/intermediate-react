# EXTRA ASSIGNMENT 2 - SWITCHES AND REDIRECTS

## EXTRA EXERCISE A:
Here we're going to be looking at Redirects, so that we can make the
index route "/" work properly!
But before we can play with redirects, we need to learn a little
bit more about how Routes work.

Try changing the "path" of all the Routes inside App.js to "heroes"

Now go to the Heroes page and see what's rendered.

## SWITCHES AND ROUTES
All of the components are rendered!
That's because `<Route>` is **inclusive** - it will render
all Routes that match a given path.

Sometimes that's what we want, sometimes it's not.
`react-router` also has a component called `Switch` that does
the opposite.

## EXTRA EXERCISE B

- Import Switch inside App.js, from 'react-router-dom'
- Surround your Routes with 
```js
<Switch> /* routes in here! */ </Switch>
```

Now look at your app in the browser and see what happens.

## EXTRA EXERCISE C
You'll see that Switch only renders one component, more specifically it renders
the *first* matching component.

Move the order of the components around, to convince yourself
that only the first one is rendered.

## EXTRA EXERCISE D:
Revert the paths and order of the Route inside `App`

## REDIRECTS
Now that we know how a Switch works, we can implement the following redirect:
We want the index route '/' to redirect to the '/heroes' page.
We can redirect things in React Router by rendering the `<Redirect/>` component.

## EXTRA EXERCISE E

- Import Redirect inside App.js, from 'react-router-dom';

Redirect takes several props. It takes (among others):

 - `to` : A string that tells the Redirect where to Redirect to
 - `from` : A string that tells the Redirect to only redirect from a specific url.
  `from` is only usable inside a `<Switch>` component, it behaves like the 'path' prop in a <Route/>
 - `exact` : A boolean that tells Redirect whether it should do fuzzy matching or not
    otherwise `/` will also match `"/ilikeapples"`

Use a Redirect inside your Switch, to make sure that the index page "/" is redirected to the heroes url.

Things to test, to make sure you've gotten it right:

  - All pages should still work
  - Reloading the /theming and /extra page should not redirect
  - When loading the page at localhost:3000 , it should redirect to localhost:3000/heroes
  - If you manually enter the path "/foo" - it should NOT redirect to /heroes

## EXTRA EXERCISE F
Let's look at adding a little style.

Instead of `<Link>` in our SideBar, we can use a `<NavLink>`.
A NavLink allows us to style a Link, if the path matches the one the link
has. So we can style the link, if it represents the page we're currently on.
We call a link like this "active"

Replace all the `<Link>` components in the SideBar with `<NavLink>`
No need to change anything but the type.

## EXTRA EXERCISE G

You can style a NavLink via the `activeStyle` prop, which takes in an object of styles to apply,
if the link is "active".

- Use the activeStyle prop, to style the link if it's active.
- You can bold the text, and set the color to 'red' when it's active
