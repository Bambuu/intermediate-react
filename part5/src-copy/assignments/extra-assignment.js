/*
EXTRA EXERCISE A:

We need to learn the difference between a <Switch> and a <Route>

Try changing the "path" of all the Routes inside App.js to "heroes"

Now go to the Heroes page and see what's rendered.
 */

/*
All of the components are rendered!
That's because <Route> is *inclusive* - it will render
all Routes that match a given path.

Sometimes that's what we want, sometimes it's not. Let's look
at a Switch, that does the opposite
*/

/*
EXTRA EXERCISE B
Import Switch inside App.js
Surround your Routes with <Switch> ...routes... </Switch>

Now try to see what happens.
*/

/*
EXTRA EXERCISE C

You'll see that Switch only renders one component, more specifically it renders
the first matching component.

Move the order of the components around, to see that only the first one is rendered.

*/


/*
Let's have the default route of localhost:3000 show the heroes
page.

We can redirect things in React-Router by rendering the <Redirect> component.
*/

/*
EXTRA EXERCISE D

Import Redirect inside App.js

Redirect takes several props. It takes (among others):
 - "to" : A string that tells the Redirect where to Redirect to
 - "from" : A string that tells the Redirect to only redirect from a specific url.
  from is only usable inside a <Switch> component
 - "exact" : A boolean that tells Redirect whether it should do fuzzy matching
    otherwise "/" will also match "/ilikeapples"

Use a Redirect inside your Switch, to make sure that the index page "/" is redirected to the heroes url.
*/

/*
EXTRA EXERCISE E
Let's look at adding a little more sexy.

Instead of <Link> in our SideBar, we can use a NavLink,
this is a link that allow us to style it, if the link is active.

Replace all the <Link> components in the SideBar with <NavLink>
No need to change anything but the type.

Make sure to import NavLink
 */

/*
EXTRA EXERCISE F
NavLink allows us to style a Link, if the path matches the one the link
has. So we can style the link, if it represents the page we're currently on.
We call a link like this "active"

You can style it via the 'activeStyle' prop, which takes in an object of styles to apply,
if the link is "active"

Use the activeStyle prop, to style the link if it's active.
*/