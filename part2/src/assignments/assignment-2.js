// ASSIGNMENT 2 - HIGHER ORDER COMPONENTS

/*
Let's look at incorporating a Higher Order Component that keeps track of the scroll position for us.
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
HOCs are functions, that work by wrapping a component and adding some behaviour.
Let's try to wrap and export our HeroList like this:

export const HeroListWithScroll = withScroll(HeroList)

We really liked the HeroList name though.. So let's keep it
- Change HeroList to HeroListClass
- Remove the export statement in front of HeroListClass
- Change the export const line to:
export const HeroList = withScroll(HeroListClass)
- Let's change HeroList to HeroListClass
 */

/*
EXERCISE D:
What the withScroll component does is, it keeps track of the scroll position, and gives the HeroList component
them through props. You can access them through the x and y props

Try console.logging(this.props.y) inside your render method, and see it work!
*/

/*
EXERCISE E:
Alright, now we have the scroll position, let's use it to color the background.
We've created a calculateBackgroundColor inside not-important/utils.js

Import it, and inside the render() method, call it with the current y position.
Log the result to make sure it changes.
 */

/*
EXERCISE F:
Style the <div> with an inline style. Calculate the backgroundColor, using the
calculateBackgroundColor function you just imported.

You style a div using inline styles, by setting the style property to an object
containing styles. E.g.

<div style={{backgroundColor: "red"}}></div>

Note the double curly braces - the first one is to tell React that we're writing some JavaScript, and the second
one is an object, in this case the object:
{
  backgroundColor: "red"
}
*/

/*
Now you've learned how to use a HoC - they're very simple to use. You wrap your component in them, and they're responsible
for keeping track of some sort of logic. That's all there is to it!
*/
