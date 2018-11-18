# ASSIGNMENT 2 - HIGHER-ORDER COMPONENTS

Let's look at using a Higher-Order Component that keeps track of the scroll position for us.
We're not going to be building one in this exercise, simply using one.

## EXERCISE A:
Delete all the code related to scrolling.
- Adding and removing eventListeners
- the `onScroll` method,
- displaying the scroll position in render
- the key in state.

## EXERCISE B:
Now, we'll need a HOC.
You can import one that keeps track of scroll-position from the "react-fns" library, that
we have installed for you.
Write
```js
import {withScroll} from 'react-fns'
```
at the top of your HeroList.

## EXERCISE C:
HOCs are functions that take in a component, and returns an enhanced component.
Let's export our `HeroList` as an enhanced component, but with the same name:
- Change the `HeroList` name to `BaseHeroList`
- Stop exporting the `BaseHeroList`
- At the bottom of the file, export the enhanced component:
```js
export const HeroList = withScroll(BaseHeroList)
```

Check to see if the app still runs.

## EXERCISE D:
The withScroll HOC passes the scroll position through the "x" and "y" props.

Try writing `console.log(this.props.y)` inside your render method to see it work.

## EXERCISE E:
Let's use the scroll position to color the background.
We've exported a `calculateBackgroundColor` function inside `not-important/utils.js`

Import it (it's a named export), and inside the `render()` method, call it with the current y position.
`console.log()` the result, to test if it works.

## EXERCISE F:
You style a div using inline styles, by setting the style property to an object
containing styles:
`<div style={{backgroundColor: "red"}}></div>`

Note the double curly braces - the first one is to tell React that we're writing some JavaScript, and the second
one is an object, in this case the object:
```json5
{
  backgroundColor: "red"
}
```

Style the root `<div>` in your HeroList.
Use the calculateBackgroundColor function instead of "red" in the example above, to set the backgroundColor.

Now you've learned how to use a HOC - they're very simple to use. You wrap your component in them, and they're responsible
for keeping track of some sort of logic. That's all there is to it!
