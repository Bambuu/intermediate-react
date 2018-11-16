# ASSIGNMENT 1 - LISTENING FOR THE SCROLLS

In this exercise we'll try implementing some
behaviour, and in the next exercise we'll use a HOC
to achieve the same result.

## EXERCISE A:
Switch to the part 2 directory in your terminal and run "npm start"
*If you get a `ENOENT` error, try running "npm install" first*

## EXERCISE B:
We want to make the background of the document
more golden the further down the user scrolls.
More awesome heroes = more gold!

We need to listen to the scroll event.
Inside the `componentDidMount` of your HeroList add the following line:
`window.addEventListener('scroll', console.log);`

Now go to your HeroList and scroll.
Make sure you can see the scroll event in the console,
when you scroll up and down.

## EXERCISE C
Let's create a function to handle the scrolling part. Create a new function inside your HeroList
called `onScroll`. Have this function `console.log("Scrolled")`

Change the `addEventListener` call, from `console.log`, to `this.onScroll`
Ensure it still works.

## EXERCISE D:
Now, try to go to the **Theming** page, and scroll down.
In your console you will still see new scroll events..!
When using `addEventListener()` in JavaScript, the eventListener,
stay on until either the page is changed or closed.
As React never "changes" the page, we have to remove the `eventListener` manually

We can do this in the lifecycle method `componentWillUnmount`
Implement `componentWillUnmount()` and have it `console.log("Goodbye")`
Click around to get a feel for when it is called.

## EXERCISE E:
Now let's unsubscribe from scroll events,  in our componentWillUnmount()
You can do that by calling:
window.removeEventListener('scroll', this.onScroll)

Check to see that now we get the scroll events inside our "HeroList", but not when we go to the "Movies" tab

## EXERCISE F:
We need to use the scroll position in the render method to change the background color.
That means we need to get it into state.

- Add a "scrollPosition" key to the state. Have it be 0 as a default.
- Inside your onScroll function, call setState with the new scroll position.
    - You can access the position through window.scrollY
- Below your list, display the scrollPosition from state.

Good job, now let's see how we can do this with a HOC
