// ASSIGNMENT 1 - LISTENING FOR THE SCROLLS

/*
React lets use reuse both visual components, but also
logic.  In this exercise we'll try implementing some
behaviour, and then using a Higher-Order Component (HOC)
to achieve the same result.
*/

/*
EXERCISE A:
Switch to the part 2 directory in your console and rum "npm start"
(If you get a ENOENT error, try running "npm install" first)
*/

/*
EXERCISE B:
We want to make he background of the document
more golden the further down the user scrolls.
More awesome heroes, deserve more gold.

We need to listen to the scroll event.
Inside the componentDidMount of your HeroList add the following line:
window.addEventListener('scroll', console.log);

Now go to your HeroList and scroll.
Make sure you can see the scroll event in the console,
when you scroll down.
*/

/*
EXERCISE C
Let's create a function to handle the scrolling part. Create a new function inside your HeroList
called "onScroll". Have this function take in "event" as a parameter, and console.log the event.

Change the "addEventListener" call, to instead of "console.log", say: "this.onScroll"
Ensure it still works.
*/

/*
EXERCISE D:
Now, try to go to the "Movies" part, and scroll down. In your console you will
still see new scroll events.
When using eventListeners on DOM elements, you have to unsubscribe
manually, as they don't know anything about the React lifecycle.

We can do this in the lifecycle method "componentWillUnmount"
Implement "componentWillUnmount()" and have it console.log("Goodbye")
Click around to get a feel for when it is called.
 */

/*
EXERCISE E:
Now let's unsubscribe from scroll events,  in our componentWillUnmount()
You can do that by calling:
window.removeEventListener('scroll', this.onScroll)

Check to see that now we get the scroll events inside our "HeroList", but not when we go to the "movies" tab
*/

/*
EXERCISE F:
We need to use the scroll position in the render method to change the background color.
That means we need to get it into state.

- Add a "scrollPosition" key to the state. Have it be 0 as a default.
- Inside your onScroll function, call setState with the new scroll position. You can access it through "event.pageY'
- Inside your render method, display the scrollPosition from state.

The position can be a little tricky to read when you're scrolling away from it.
You can use this JSX snippet to make sure it stays in sight:
<h1 style={{position: "fixed"}}>{this.state.scrollPosition}</h1>

*/

// Good job, now let's see how we can do this with a HOC
