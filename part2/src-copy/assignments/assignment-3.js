// ASSIGNMENT THREE - REFS

/*
Occasionally we do need to access the underlying DOM. It's very rare,
and mostly for managing user focus, or integrating with third party libraries.

For that we have refs, or references. Use them very sparingly.

In this assignment we'll want to use refs to manage focus inside the form we just implemented.
 */

/*
EXERCISE A:

Create a ref inside your HeroList. This is done via the statement:

ref = React.createRef();
 */

/*
Now we have a ref. Inside our render method, we specify what element this ref should point to.
We do this by adding our ref to the "ref" attribute. There's an example below
 */
<li ref={this.ref}> </li>

/*
EXERCISE B:
Add your ref to the first <input> element in your form.
*/

/*
EXERCISE C:
We need to add some heroes quickly!
Use the ref inside the componentDidMount lifecycle method
to focus the first input field when the component loads.
More help below:
*/
componentDidMount(){
  // Here we can access "this.ref"
  // We get the DOM element by "this.ref.currentTarget"
  // We can focus it by calling "this.ref.currentTarget.focus()"
}

/*
Now when the HeroList loads, you should be able to start typing right away in the input field!
*/

/*
EXERCISE D:
We'll also want to shift focus back to the start of the form, when we've added a hero.
Inside your "addSuperHero" method, use the ref to put focus back on the first <input> element.
Make sure you can keep typing after clicking submit!
*/
