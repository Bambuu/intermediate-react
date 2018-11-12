// ASSIGNMENT 2 - HIGHER-ORDER COMPONENTS

/*
Let's look at using a Higher-Order Component that keeps track of the scroll position for us.
GUSTAV: WRITE THAT WE WONT BE BUILDING ONE HERE; JUST USING ONE
*/

/*
EXERCISE A:
Delete all the code related to scrolling.
- Adding and removing eventListeners
- the "onScroll" method,
- displaying the scroll position in render
- the key in state.
*/

/*
EXERCISE B:
Now, we'll need a HOC. You can import one that keeps track of scroll-position from the wonderful "react-fns" library.
Write
import {withScroll} from 'react-fns'
at the top of your HeroList.
*/

/*
EXERCISE C:
HOCs are functions that take in a component, and returns an enhanced component.
The syntax is
const EnhancedComponent = withSomeExtraFunctionality(OriginalComponent)

We can wrap and export our HeroList like this.
export const HeroListWithScroll = withScroll(HeroList);

We'd prefer not to change the name, so let's not do that. Instead:
- Change the "HeroList" name to "BaseHeroList"
- Remove the export statement in front of "BaseHeroList"
- Change the export const line to:
export const HeroList = withScroll(BaseHeroList)
GUSTAV!!!! LINE WHAT??

Check to see if the app still runs.
*/

/*
EXERCISE D:
The withScroll HOC, keeps track of the scroll position,
and passes them to the HeroList component through props.
You can access them through the "x" and "y" props

Try console.log(this.props.y) inside your render method, and see it work!
*/

/*
EXERCISE E:
Alright, now we have the scroll position, let's use it to color the background.
We've exported a calculateBackgroundColor function inside not-important/utils.js

Import it (named import), and inside the render() method, call it with the current y position.
Log the result to make sure it changes.
 */

/*
EXERCISE F:
You style a div using inline styles, by setting the style property to an object
containing styles. E.g.

<div style={{backgroundColor: "red"}}></div>

Note the double curly braces - the first one is to tell React that we're writing some JavaScript, and the second
one is an object, in this case the object:
{
  backgroundColor: "red"
}

Style the root <div> in your HeroList.
Use the calculateBackgroundColor function instead of "red" in the example above, to set the backgroundColor.
*/

/*
Now you've learned how to use a HOC - they're very simple to use. You wrap your component in them, and they're responsible
for keeping track of some sort of logic. That's all there is to it!
*/
