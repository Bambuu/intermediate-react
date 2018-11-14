// ASSIGNMENT 2 - USING A RENDER PROP

/*
Let's look at how using a Render Prop, can drastically simplify our form code.
We've created our own FormController render-prop. It's in not-important/FormController.js
*/

/*
EXERCISE A
Inside HeroList.js, import the FormController from 'not-important/FormController'
*/

/*
EXERCISE B
Render the FormController inside the JSX. It expects
a function-as-a-child. For now, you can simply give it a function
that console.logs() the parameter it is given.
You can call the parameter anything. I'll refer to it as "formValues"
the rest of the exercise.

When your app doesn't crash, and logs an empty object to the console,
you've succeeded.
*/

/*
EXERCISE C:
Our FormController takes in an 'initialValues' prop,
which consists of an object, and the initial values they
should be set to in your form.

Pass it the object {name: "MyHeroName"}

Make sure the object you're console.logging is no longer empty.
*/

/*
EXERCISE D:
Let's look at rendering some JSX inside our form.
Have the function-as-a-child return   a <div>
with an <input> element inside it.

When you're done, you should have a regular input field
you can write in.

Tip: It's a good idea to keep the console.log inside the function
for now, to log the parameters you're getting. It'll help
figuring out how to use them.
*/

/*
EXERCISE E:
Let's look at wiring this inputField up to our FormController.
Inside our function, we should have been passed an object that looks like this:
{
  name: {
    value: "MyHeroName",
    onChange: //some function
    }
}

Let's pass down the value to our <input>, through the value
prop.
Aka.
<input value={formValues.name.value} />

You should have a form with the initialValue of myHeroName now!
*/

/*
EXERCISE F
Unfortunately, we can't yet write in the field. We need
an onChange handler as well. Use the onChange handler that
the FormController provides in
"formValues.name.onChange"

You should now have an <input> component which you can type in,
and that has an initial value.
*/

/*
EXERCISE G
Let's look at doing the same thing again with another field.

In initialValues, add "awesome: 999" to the object

Notice how the "formValues" parameter you've given changes. It now has both
a "awesome" and a "name" property.
*/

/*
EXERCISE H:
Let's add another <input> that corresponds to "awesome"
It's just like before
  - Add an <input> field inside the FormController
  - Make the type="number"
  - set the "value" prop to "formValues.awesome.value"
  - set the onChange prop to "formValues.awesome.onChange"

Now you should have two <input> elements you can type in!
This new one should have 999 as the initial value.
*/