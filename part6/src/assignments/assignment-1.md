# ASSIGNMENT 1 - STATIC CONTEXT

## EXERCISE A
Let's have a look at creating a Context for our Theme.
We can create one using `React.createContext()`

  - Create a new file `ThemeContext.js`
Inside the file:
  - Import React
  - Create a context and export it:

```js
export const ThemeContext = React.createContext()
```

## EXERCISE B
We'll also want to define a starting theme.
Inside `ThemeContext.js` export a object called `redTheme`
that contains `color: "#c4361d"`

## EXERCISE C:
Let's create a `Provider`, that will pass the value of the context
to. We'll create it inside `App.js`

We'll need to import the `ThemeContext` and `redTheme` we just exported

## EXERCISE D
We'll need to add the provider in the render method.
Everything that needs the theme, must be below the Provider in the Hierarchy.

Add the `<ThemeContext.Provider>` just below the `BrowserRouter` in the hierarchy.
Set the `value` prop of the `Provider` to be the `redTheme` object you imported:
```js
// Inside render
<ThemeContext.Provider value={redTheme}>
  ...The rest of your app should be in here...
</ThemeContext.Provider>
```

## EXERCISE E:
Let's look at consuming our Context!
We get the theme though a `Consumer`, that uses a function-as-a-child:
```js
<ThemeContext.Consumer>
  {
    (themeContext) => {
    return (<div>/* In here we can use the themeContext! */</div>)
  }
  }
</ThemeContext.Consumer>
```
Inside `Theming.js`:

- Import our `ThemeContext`
- Use the `ThemeContext.Consumer` inside the returned JSX, to render the 
`color` attribute to the page:
```js
      <ThemeContext.Consumer>
       {themeContext => {
         return <p>Color: {themeContext.color}</p>
       }}
      </ThemeContext.Consumer>
```

You're done when you see the hex-code you defined in `ThemeContext.js`

## EXERCISE F:
Inside `Theming.js` create a button with the text "Toggle Theme"
Using inline styles, use the `color` value you get from the theme, to
set the backgroundColor of the button.

You should have a nice orange button now!

*Tip: If you've forgotten the syntax of inline styles, here's an example:*
```js
<div style={{backgroundColor: "rebeccapurple"}}> This div has style! </div>
```
