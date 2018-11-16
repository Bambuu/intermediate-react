# Assignment 1 - Static Context
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
to. We'll create it inside `App.js`

We'll need to
  - Import the Context we just exported
GUSTAV: WHY CREATE THE THEME OBJECT IN APP.JS AND NOT THEMECONTEXT.JS??? 
  - Create a top-level object called "theme"
  that contains `color: "#f4b642"`

We'll need to add the provider in the render method.
Everything that needs the theme, must be below the Provider in the Hierarchy.

Add the `<ThemeContext.Provider>` just below the `BrowserRouter` in the hierarchy.
Set the `value` prop of the `Provider` to be the `theme` object.

## Exercise C:
Let's look at consuming our Context!
We get the theme though a `Consumer`, that uses a function-as-a-child:
```jsx harmony
<ThemeContext.Consumer>
  (themeContext) => {
    return <div>/* In here we can use the themeContext! */</div>
  }
</ThemeContext.Consumer>
```
Inside Theming.js
- Import our `ThemeContext`
- Use the `ThemeContext.Consumer` inside the render function
- Render the `color` attribute as a string on the themeContext.

You're done when you see the hex-code you defined in `App.js`

## Exercise D:
Let's try using this hex-code to style something.
Inside `Theming.js` create a button with the text "Toggle Theme"
Using inline styles, use the "color" value you get from the theme, to
set the backgroundColor of the button.
GUSTAV: ARE THEY TOTALLY FAMILIAR WITH INLINE STYLES?

You should have a nice orange button now!

## Exercise E:
Let's try to consume the context another place as well.
Inside our `<HeroList>` component, subscribe to the context, using
a `Consumer`.
GUSTAV: WHICH HEADER DIV?
Use inline-styles to change the `backgroundColor` of the header div.
