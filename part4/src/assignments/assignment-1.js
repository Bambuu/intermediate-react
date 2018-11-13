// ASSIGNMENT 1 - Routing and the sidebar

/*
Let's add some routing. We've installed "react-router" for you.
You will be importing the things from it through "react-router-dom"

The first thing we need to do is add a top-level Router, that will help us
keep our UI in sync with our URL.
*/

/*
EXERCISE A:
Inside App.js, import BrowserRouter from "react-router-dom"
It is a named export.

We'll want the Router to be at the outermost layer of our app.
Inside the render method, surround the outermost div with a BrowserRouter.

E.g. go
<BrowserRouter>
  ...rest of render in here...
</BrowserRouter

Your app should run like normally
 */

/*
EXERCISE B:
Let's look at making some proper links in the SideBar.
React-Router uses A "Link" component, that acts as a link.

Inside SideBar.js, import Link from "react-router-dom"
It is also a named export

Inside SideBar, you will find several <a> components.
Replace them with <Link> components.

Link takes a "to" prop, that will set the url.
Make up an appropriate url for each link.

When this exercise is finished, you'll see that when you click a link,
the url changes - but the UI does not!
*/

/*

/*
EXERCISE C:
Let's make our app display different components depending on the url.
Currently we use a Conditional Rendering approach. We'll replace this with Routes

import Route from "react-router-dom"

Comment out the large if-else block at the start of the render() method.
Remove {mainComponent} inside the JSX

Your app should now show nothing but a sidebar and a header, but otherwise compile fine
*/

/*
EXERCISE D:
Let's add our first Route.
A Route takes a path, and a component to display. The syntax is like this:
<Route path="/mySuperCoolPath" component={MySuperCoolComponent} />

Place a Route underneath the <Header/> component, that will render your HeroList,
if the correct path is specified.

Click the "Heroes" link in the sidebar, to see if it works.
Note: Currently it will not work with the index url "/" - which will still show nothing.
*/

/*
Let's render the rest of the Routes now.

Most of the other pages just return JSX, and not a single component. E.g. the /movies
page used to return:
<div className="tall-div">Here's a fun list of superhero movies.. to be implemented later..</div>

We can't put JSX like that inside a Route's "component" prop - but we can inside its "render" prop!
The syntax is like this:
*/
<Route path="/mySuperCoolPath" render={() => <div> MySuperCoolDiv</div>} />

/*
EXERCISE E:
Implement the rest of the Routes. Use the "render" method,
when you need the route to be in JSX,
and the "component" prop otherwise.

Test to see if all routes work.
*/












/*
Exercises:

  - Add BrowserRouter in ap
  - Only one child allowed
  - Put everything in a div

  - Add links to sidebar with urls
     - keep onClick
     - url changes now! Hallelujah!
     - But refresh..??

  - Add Routes
  - Components..?
   - Use both component and render

  - Links work now - but what about base-link?! /
  - Redirect .. !
  - Default Route..???!





  - Install routing. WE INSTALL THIS
    - notice urls and extra exercises

  - Sidebar works with links

  - Top Level Router


  - Header works with current location





 */