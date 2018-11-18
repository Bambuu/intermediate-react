# EXTRA ASSIGNMENT 2 - KEYS GONE WILD

Let's take a look at what happens when you implement keys wrong.
In `ExtraAssignment.js` is a component, with a list of Superhero movies.
We're going to look at keys, and how they can go wrong.

## EXERCISE A
Click the "Extra Exercise" on the sidebar and make sure the Extra Exercise shows up.

## EXERCISE B
Have a read through the component below.
It consists of a (fake) list of superhero movies, all
released the same year. There's two buttons. One of the
buttons change a movie into something else, and another
button that shuffles the order.

The list displays the movies, but each movie component also
has a button, that counts how many times it's been clicked.

Continue when you feel like you have an idea of what's going on.


## EXERCISE C
Let's add some wrong keys to see how it breaks.
Let's start off by using the index of the array. So
the movie displayed first, gets `key=0`, the second gets `key=1`
and so forth.
Map provides us with the index as the second parameter in our function.

Add the index as the key for the components.
Check to see that the warning in your console is gone.


## EXERCISE D:
However, using the index as the key doesn't work, when the list is shuffled or sorted differently.
Try clicking some "+1" buttons to make the count go up a bit, and then click the shuffle button.

You'll notice that while the movie names might be shuffled, the count is not.
This is because when using the index as the key, React will always think that the elements are the same.
It considers the component with `key=1`, to always be the same, no matter how much we change it, and so it
keeps the internal state of the component.

**Key Takeaway: Try never to use the index as the key, and if you do - only do it when you're sure the list will
not change order.**


## EXERCISE E:
Let's try something else. Use the year of the movie, as the key

Now, React will warn you in the developer console that there's multiple children with the same key.
It does this for a very good reason. Try clicking on "Change a movie!" which should turn one of the movies into a
Spiderman movie, but will not behave nicely when keys can be identical!

If keys are identical, React will break in subtle and strange ways. Play around with the buttons. You should
be able to create infinite list elements, even though there's never more than four movies inside the state.


Summing up, always try to use a unique id when using lists.
Particularly when the order of the lists can change. If you're lucky you'll have an id from a
database somewhere. Otherwise, you can generate unique keys, and store them in the state
along with the rest of the data. That way you can ensure that the element always has a unique key.


