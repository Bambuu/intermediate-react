# ASSIGNMENT 1 - LISTENING FOR THE SCROLLS

In this exercise we'll try implementing some
behaviour, and in the next exercise we'll use a
Higher-Order Component to achieve the same result.

## EXERCISE A:
Switch to the part 2 directory in your terminal and run "npm start"
*If you get a `ENOENT` error, try running "npm install" first*

## EXERCISE B:
We want to make the background of the document
more golden the further down the user scrolls.
More awesome heroes = more gold!

We need to listen to the scroll event.
Inside the `componentDidMount()` lifecycle method
of your HeroList, add the following line:
`window.addEventListener('scroll', console.log);`

Make sure you can see the scroll events in the console,
when you scroll up and down your HeroList.

## EXERCISE C
Create a new function inside your HeroList
called `onScroll`. Have this function `console.log("scrolled")`

Change the `addEventListener` call, from `console.log`, to `this.onScroll`
Ensure it logs "scrolled"

## EXERCISE D:
Now, try to go to the **Theming** page, and scroll down.
You will still see new scroll events in your console!
When using `addEventListener()` in JavaScript, the eventListener,
stay on, until the page changes.
As React never "changes" the page, we have to remove the `eventListener` manually

We can do this in the lifecycle method `componentWillUnmount`
Implement `componentWillUnmount()` and have it `console.log("Goodbye")`
Click around to get a feel for when it is called.

## EXERCISE E:
Now let's unsubscribe from scroll events in our `componentWillUnmount()` like this:
```js
window.removeEventListener('scroll', this.onScroll)
```
Now we should get scroll events inside our HeroList, but not in **Theming**

## EXERCISE F:
We need the scroll position inside our render method.
That means we have to put it in `state`

- Add a "scrollPosition" key to the state. Have it be 0 as a default.
- Inside your onScroll function, call setState with the new scroll position.
    - You can access the position through `window.scrollY`
- Below your list, display `this.state.scrollPosition` from state.
