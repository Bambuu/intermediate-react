# ASSIGNMENT 1 - LISTENING FOR THE SCROLLS

In this exercise we'll try implementing some
behaviour, and in the next exercise we'll use a
Higher-Order Component to achieve the same result.

## Note
During these exercises, you might get the following error in your Developer Tools Console:
`Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.`
This is because we're skipping some steps to make the exercises simpler. Feel free to ignore this error.

## EXERCISE A:
Switch to the part 3 directory in your terminal and run "npm start"

## EXERCISE B:
We want to make the background of the document
more golden the further down the user scrolls.
More awesome heroes = more gold!

We need to listen to the scroll event.
Add an empty `componentDidMount` lifecycle method inside
the `HeroList` class:
```js
componentDidMount() {
  // Put stuff in here!
}
```

## EXERCISE C
Inside `componentDidMount` add the following line:
```js
window.addEventListener('scroll', () => {
  // This is our eventListener!
  console.log("Scrolled to coordinate",  window.scrollY)
});
```
This attaches an eventListener, which is a function that will be called
every time the user scrolls. Now when you scroll down your HeroList, you
should be able to see the current position in the console.

You should be able to see 
Make sure you can see the scroll events in the developer tools console,
when you scroll up and down your HeroList.

## EXERCISE D:
We need the scroll position inside our render method.
That means we have to put it in `state`

- Add a `scrollPosition` key to the state. Have it be 0 as a default.
- Inside your `eventListener` function, call `this.setState` with the new scroll position.
    - You can access the position through `window.scrollY`
- Below your list, display `this.state.scrollPosition` from state.
