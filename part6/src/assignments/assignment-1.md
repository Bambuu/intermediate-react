# Assignment 1
Let's look at defining a Context.

## Exercise A
Let's have a look at creating a Context
We can create one using
`React.createContext()`

  - Create a new file ThemeContext.js
Inside the file:
  - Import React
  - Create a context
  - Assign it to a "ThemeContext" `const`
  - Export it

## Exercise B:
Let's create a `Provider`, that will pass the value of the context
to. We'll create in inside `App.js`

We'll need to
  - Import the Context we just exported 
  - Create a top-level object called "theme"
  that contains `color: #f4b642`

Inside the Render method, we'll need to add the provider.
Every object that will need access to this context, must be a descendant of
the provider.

Add the `<ThemeContext.Provider>` just below the `BrowserRouter` in the hierarchy.
Set the `value` prop of the `Provider` to be the `theme` object we declared earlier. 

## Exercise C:
Let's look at consuming our Context!
We use our Theme through a Provider, which uses a function-as-a-child
to provide the theme:
```jsx harmony
<ThemeContext.Consumer>
  (themeContext) => {
    return <div>Your JSX here..!</div>
  }
</ThemeContext.Consumer>
```
Inside Theming.js
- Import our `ThemeContext`
- Use the `ThemeContext.Consumer` inside the render function
- Render the value of the "color" attribute on the themeContext.

You're done when you see the hex-code you defined in `App.js`

## Exercise D:
Let's try using this hex-code to style something.
Inside `Theming.js` create a button with the text "Toggle Theme"
Using inline styles, use the "color" value you get from the theme, to
set the backgroundColor of the button.

You should have a nice orange button now!

## Exercise E:
Let's try to consume the context another place as well.
Inside our `<HeroList>` component, subscribe to the context, using
a `Consumer`.
Use inline-styles to change the `backgroundColor` of the "Add Hero" button.
