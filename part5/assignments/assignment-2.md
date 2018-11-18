# ASSIGNMENT 2 - USING A RENDER PROP

## The FormController
Let's look at how using a Render Prop, can drastically simplify our form code.
We've created our own render-prop component. We can use it to keep track of our 
`<input>` elements inside our HeroList.
The component is called `FormController` and it can be imported from `not-important/FormController.js`

## EXERCISE A
Inside `HeroList.js`, import the FormController:
```js
import { FormController } from "./not-important/FormController";
```

## EXERCISE B
Render the `FormController` *inside* of the `HeroList` JSX. It expects
a function-as-a-child, and it takes in a prop called `initialValues` which is an object
consisting of names, and initial values.

You can copy the following snippet inside the JSX of your `render` function:
```js
<FormController initialValues={{name: "MyHeroName"}}>
{
  (formValues) => {
    console.log(formValues)
  }
}
</FormController>
```

You know it is working, if you can see an object with the key `name` in your console.
*You might see it multiple times, and that's normal*

## EXERCISE C:
Let's look at rendering some JSX inside our form.
We can do this, by returning it underneath the `console.log`
in your FormController's function-as-a-child.

Have the function-as-a-child return a `<div>`
with an `<input>` element inside it.

You're done when you see an extra input field.

## EXERCISE D:
Let's look at wiring this `<input>` up to our FormController.
`formValues` is an object that looks like this:
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

*React will also warn you about the field not being able to change. We'll fix that later*

## EXERCISE E
If we want to write in the field, we'll
need an `onChange` handler. Use the onChange handler that
the FormController provides in
`formValues.name.onChange`

You should now have an `<input>` component which you can type in,
and that has an initial value of "MyHeroName".

## EXERCISE F
Let's look at doing the same thing again with another field.

In `initialValues`, add `awesome: 999` to the object

Notice how `formValues` changes. It now has both
an `awesome` and a `name` property.

## EXERCISE G:
Let's add another `<input>` that corresponds to `awesome`
Like before:
  - Add an `<input>` field inside the FormController
  - set the `value` prop to `formValues.awesome.value`
  - set the `onChange` prop to `formValues.awesome.onChange`

Here you'll want to mark `type` of the input as `number` as well.

Now you should have two `<input>` elements you can type in!
This new one should have 999 as the initial value.
