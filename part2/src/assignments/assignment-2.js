// ASSIGNMENT 2 - HIGHER-ORDER COMPONENTS

/*
Now we've tried manually keeping track of a scroll position.
let's use a Higher-Order Component to do this for us.
A HOC is a React component that wraps our component, and provides
us with something extra through "props"

Let's look at incorporating a Higher-Order Component that keeps track of the scroll position for us.
*/

/*
EXERCISE A:
Delete all the code related to scrolling. Adding and removing eventListeners, the "onScroll" method,
and the key in state.
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
Now you've learned how to use a HOC - they're very simple to use. You wrap your component in them, and they're responsible
for keeping track of some sort of logic. That's all there is to it!
*/
