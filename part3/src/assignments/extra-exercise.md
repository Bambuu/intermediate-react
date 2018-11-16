# EXTRA-EXERCISE. Building HOC
Let's try implementing our own Higher Order Component!
We'll try reimplementing the withScroll HOC from the previous exercise.

## EXERCISE A
Click the "Extra Exercise" on the sidebar.
Check that the component in `ExtraAssignment.js` is displayed

## EXERCISE B:
A HOC is a function that takes in a Component and returns another one.
The first step is to create a function that takes in a component, and returns the same component

- Take in `WrappedComponent` as a parameter in `withScroll`
- Return `WrappedComponent` without doing nothing to it.


## EXERCISE C:
Let's make sure to export the HOC component.
- Rename `ExtraAssignment` to `BaseExtraAssignment`
- Remove the `export` in front of the class
- Below everything, add:
```js
  export const ExtraAssignment = withScroll(BaseExtraAssignment)
```

Note here that components aren't very "magic"
We can take components in as parameters, and return them from
functions.

However, how do we *do* something with the component?
The answer is - we don't! We return a *new* component that
wraps the old one.

## EXERCISE D:
So let's try returning a Class-Based Component instead!

Inside your `withScroll` function define a class, call it `OuterComponent`:

Return some random text from the render method.

Return this class you've just created.

Tip: If you're confused, just define it exactly the way `BaseExtraAssignment` is
defined below.

## EXERCISE E
Now, let's return the `<WrappedComponent/>` from our render method
You can use the `<WrappedComponent/>` you get as a parameter, just like any other Component
you would import from somewhere.

You will notice the props are missing from the component

## EXERCISE F:
We need to pass down props to the `<WrappedComponent />`

We can do it by writing like this in the render method:
`<WrappedComponent {...this.props} />`

This takes all the props the HOC was given, and passes them to the `WrappedComponent`.

Pass down the props to the `WrappedComponent`, and ensure they're displayed.

**
Tip: If you're confused by the {...props} line, it's a spread operator.
Feel free to ask about it - you can also read more info here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
**

Now we've actually got a proper class-based Higher-Order Component. We can do anything with this
component we'd normally do, including setting state, and getting props.

Let's pass some extra props to our `WrappedComponent`. Let's just start off by hard-coding the props `x` and `y`

## EXERCISE H:
Render the WrappedComponent like this:
```jsx harmony
<WrappedComponent x={0} y={0} {...props} />
```

Display both the x and the y prop inside the BaseExtraAssignment

## EXERCISE I:
Now all that's left to do, is get the scroll position into the state, and pass that as the x and y
props. This is exactly like we implemented it in part 1

In the OuterComponent:
- Create `x` and `y` in the state, set them to 0 to start
- Create a `scrollHandle` function inside the class.
- Have the `scrollHandle` function, set the state to `window.scrollX` and `window.scrollY`
- Attach a `scrollHandle` as a scrollListener in `componentDidMount`
- Stop listening in `componentWillUnmount`
- Pass the `x` and `y` of the state, down into the wrappedComponent

Now you've (basically) implemented the withScroll component of react-fns.
If you want, you can try using your withScroll on the HeroList, to see if it works.
