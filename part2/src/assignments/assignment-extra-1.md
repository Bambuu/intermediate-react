# EXTRA ASSIGNMENT - REFS
Occasionally we do need to access the underlying DOM. It's very rare,
and mostly for managing user focus, or integrating with third party libraries.

For that we have refs, or references. Use them very sparingly.

In this assignment we'll want to use refs to manage focus inside the form we just implemented.

## EXERCISE A:

Create an empty ref inside your HeroList component. This is done outside any methods:
```js
ref = React.createRef();
```

Now we have a `ref`. Inside our render method, we specify what element this ref should point to.
We do this by adding our ref to the `ref` attribute:
```jsx harmony
  <li ref={this.ref}> </li>
```

## EXERCISE B:
Add your `ref` to the first `<input>` element in your form.

## EXERCISE C:
When the user looks at the HeroList, they should
be able to start typing immediately.

Use the `ref` inside the `componentDidMount` lifecycle method
to focus the *first* `<input>` component when the component loads:
```js
componentDidMount(){
  // Here we can access "this.ref"
  // We get the DOM element by accessing "this.ref.current"
  // We can focus it by calling "this.ref.current.focus()"
}
```

Now when the HeroList loads, you should be able to start typing right away in the input field, without clicking on it first!

## EXERCISE D:
We'll also want to shift focus back to the start of the form, when we've added a hero.
Inside your `addSuperHero` method, use the ref to put focus back on the first `<input>` element.
Make sure you can keep typing after clicking submit!