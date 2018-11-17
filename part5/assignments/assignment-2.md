# ASSIGNMENT 2 - USING A RENDER PROP

## The FormController
Let's look at how using a Render Prop, can drastically simplify our form code.
We've created our own render-prop component. We can use it to keep track of our 
`<input>` elements inside our HeroList.
The component is called `FormController` and it can be imported from `not-important/FormController.js`

## EXERCISE A
Inside `HeroList.js`, import the FormController from 'not-important/FormController'

## EXERCISE B
Render the `FormController` inside the JSX. It expects
a function-as-a-child.
Give it a function that console.logs() the parameter it is given.
You can call the parameter anything, but I'll call it `formValues`

When your app logs an empty object to the console, you've succeeded.

## EXERCISE C:
Render-prop components are just like regular components.
This means they also take in props.

FormController takes an `initialValue` prop.
`initialValues` consists of an object, and the initial values they
should be set to in your form.

Pass it the object `{name: "MyHeroName"}`

Make sure the object you're console.logging is no longer empty.

## EXERCISE D:
Let's look at rendering some JSX inside our form.
Have the function-as-a-child return a `<div>`
with an `<input>` element inside it.

*Tip: It's a good idea to keep the `console.log` inside the function
for now, to log the parameters you're getting. It'll help
figuring out how to use them.*

## EXERCISE E:
Let's look at wiring this `<input>` up to our FormController.
Inside our function, we should have been passed an object that looks like this:
```js
{
  name: {
    value: "MyHeroName",
    onChange: //some function
    }
}
```

Let's pass down the `value` to our `<input>`, through the value
prop:
`<input value={formValues.name.value} />`

You should have an `<input>` with the value of "myHeroName" now!

## EXERCISE F
Like before, if we want to write in the field, we'll
need an onChange handler. Use the onChange handler that
the FormController provides in
`formValues.name.onChange`

You should now have an `<input>` component which you can type in,
and that has an initial value of "MyHeroName".

## EXERCISE G
Let's look at doing the same thing again with another field.

In `initialValues`, add `awesome: 999` to the object

Notice how the `formValues` parameter you've given changes. It now has both
an `awesome` and a `name` property.

## EXERCISE H:
Let's add another `<input>` that corresponds to `awesome`
Like before:
  - Add an `<input>` field inside the FormController
  - set the `value` prop to `formValues.awesome.value`
  - set the `onChange` prop to `formValues.awesome.onChange`

Here you'll want to mark `type` of the input as `number` as well.

Now you should have two `<input>` elements you can type in!
This new one should have 999 as the initial value.
