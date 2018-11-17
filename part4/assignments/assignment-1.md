# ASSIGNMENT 1 - Routing and the sidebar

Let's add some routing. We've installed `react-router` for you.
You will be importing from "react-router-dom"

The first thing we need to do is add a top-level `Router`, that will help us
keep our UI in sync with our URL.

## EXERCISE A:
Inside `App.js`, `import {BrowserRouter} from "react-router-dom"`

We'll want the Router to be at the outermost layer of our app.
Inside `App` surround the outermost div with a `BrowserRouter`:
```jsx harmony
<BrowserRouter>
  ...rest of render in here...
</BrowserRouter>
```
Your app should run like before.

## EXERCISE B:
Let's make some proper links in the `SideBar`.
React Router uses a `<Link/>` component, that acts like an `<a>` tag.

Inside `SideBar.js`, `import {Link} from "react-router-dom"`

Inside SideBar, you will find several `<a>` components.
 - Replace them with `<Link>` components.
 - Remove the onClick & href props

Link takes a `to` prop, that will set the url.
Give the different pages different urls like this schema:

  - Heroes page: "/heroes"
  - Theming page: "/theming"
  - Extra Exercise: "/extra"

When this exercise is finished, you'll see that when you click a link,
the url changes - but the UI does not!

## EXERCISE C:
Let's have the UI update based on the url.
Currently inside `App` we use Conditional Rendering to render
the correct component. We'll replace this with `Routes`

In the App component:

  - Comment out the large if-else block at the start of the `render()` method.
  - Remove `{mainComponent}` inside the JSX

Your app should now show nothing but a sidebar and a header.

## EXERCISE D:
Let's add our first `Route`.

Import it inside App.js, like the other components.

A Route takes a path, and a component to display:
```jsx harmony
<Route path="/mySuperCoolPath" component={MySuperCoolComponent} />
```

- Place a Route underneath the `<Header/>` component, that will render your HeroList,
  if the correct path is specified.
- Click the "Heroes" link in the sidebar, to see if it works.

* Note: Currently it will not work with the index url "/" - which will still show nothing. *

## EXERCISE E:
Implement the two other Routes (theming, extra), just like you did with the "/heroes" route

Test to see if all routes work.

## EXERCISE F:
It's time for a little spring cleaning.
Remove everything related to the old way of managing links

 - The state key in App
 - The commented out if-statements in App
 - The changePage function in app
 - The changePage props passed down to SideBar
 - The propType in SideBar


After this, you should have a functional navigation, with
routes and links.
The index route at '/' still doesn't work, but we'll
look at that in the extra exercises.
