// ASSIGNMENT 1 - Higher Order Components

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
Implement "componentWillUnmount()"
 */
