// ASSIGNMENT 1 - LISTENING FOR THE SCROLLS

/*
  We've seen how React lets us reuse visual components.
  We can use a Header or a PlusButton anywhere we need one.
  However, React also lets us reuse logic.
  Here we'll try implementing some behaviour, and then using
  a Higher-Order Component (HOC) to get the same result.
*/

/*
EXERCISE A:
Switch to the part 2 directory in your console and rum "npm start"
 */

/*
EXERCISE B:
Our mission here is to make the background of the document
more golden, the more the user scrolls down. More awesome
superheroes, deserve more gold.

The first thing we need to do, is listen to the scroll event
of the window

Inside the componentDidMount of your HeroList add the following line:
window.addEventListener('scroll', console.log);

Now go to your HeroList. You should see a long list of scroll events when you scroll down.
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
still see new scroll events. When using eventListeners on DOM elements, you have to unsubscribe
manually, as they don't know anything about the React lifecycle.

We can do this in the lifecycle method "componentWillUnmount"
Implement "componentWillUnmount()" and have it console.log("Goodbye")
Click around to get a feel for when it is called.
 */

/*
EXERCISE E:
Now let's unsubscribe in our componentWillUnmount, you can do that by calling:
window.removeEventListener('scroll', this.onScroll)

Check to see that now we get the scroll events inside our "HeroList", but not when we go to the "movies" tab
*/

/*
EXERCISE F:
Alright, but we'll want to be able to use the scroll position in the render method as well, so we need to get
it into React.

- Add a "scrollPosition" key to the state. Have it be 0 as a default.
- Inside your onScroll function, call setState with the new scroll position. You can access it through "event.pageY'
- Inside your render method, output {this.state.scrollPosition} - so that you can see it changes.
 */

// Good job, now let's see how we can do this smarter.
// JEPPE IS THIS TOO MUCH?
