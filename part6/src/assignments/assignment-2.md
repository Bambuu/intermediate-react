# ASSIGNMENT 2 - Theme-togglin'

## Exercise A:
To change the theme, we'll need two themes.
Change our `theme` object to look like this:
```js
{
  orange: {
    color: '#f4b642'
  },
  green: {
    color: '#41f459'
  }
}
```

Change the Providers `value` to be `theme.orange` - check it still works.

## EXERCISE B:
We'll also need to be able to let React know when the Theme has updated.
To do that, we'll need to put it inside the state.

Add a `theme` state to the `App` component. Have the default value be `theme.orange`

Change the Providers `value` to be `this.state.theme`
Ensure it still works.

## EXERCISE C:
We'll need to be able to toggle the theme as well. Add a method inside `App`
that's called `toggleTheme`.
You must define it *ABOVE* where you define `state`

Have it simply `console.log()` something for now.

We'll need to pass this function to the consumers of the context, so we're going
to put it into state!
Add `toggleTheme: this.toggleTheme` into state

## EXERCISE D
However, we only pass down the `theme` part of the state currently! We'll
need to pass down all of the state.
- Change the `value` of the Provider to be `this.state`
- Anywhere you accessed `themeContext.color`, you  must change it to `themeContext.theme.color`

## EXERCISE E 
Now we have access to our the function anywhere we subscribe to the context.
Inside `Theming.js`, call `toggleTheme` when the button is clicked.
Check that the `console.log` is being called.

## EXERCISE B:
Let's implement the `toggleTheme` function.
Have it compare `this.state.theme === theme.orange`.
If this evaluates to true, use `setState` to change the theme to `theme.green`
Otherwise, it should switch the theme to `theme.orange`


## Final notes
Now your button should switch the theme when clicked. You will see both the
header and the buttons color is updated. All without passing a simple prop down
to components that don't need it.

Be careful though: One of Reacts greatest strengths is its
explicitness. Use Context sparingly.

Preferably only for global state, e.g. user login status,
theming, internationalization etc. 

Good job on completing!
