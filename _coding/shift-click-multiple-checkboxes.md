---
layout: post
title: Shift Click Multiple Checkboxes
date: 2018-07-10 14:22 -0500
categories: [ javascript, code ]
image: code-illo.png
excerpt: Coding can be challenging for a designer, here's a basic breakdown.
passname: code
---

Building a list taker in CSS is a fun challenge, even hooking up the Javascript to it isn't so bad, but holding down shift and multi-selecting many things at once? Not so easy.

Fortunately one of Wes Bos's tutorials has a great lesson on this.  Here is my final result:

<p data-height="265" data-theme-id="0" data-slug-hash="MBZrwd" data-default-tab="html,result" data-user="sthig" data-pen-title="Multiple select checkbox" class="codepen">See the Pen <a href="https://codepen.io/sthig/pen/MBZrwd/">Multiple select checkbox</a> by scott thigpen (<a href="https://codepen.io/sthig">@sthig</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Multi select everywhere!

Especially in Gmail or most email web apps.  So this is good stuff to know when building out apps.  

The first thing we want to do is fine a way to select all those checkboxes, so writing a variable in ES6 format to select everything can be written by:

`const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');`

We use the querySelectorAll syntax to find anything that is an input specifically with the type checkbox (this was new to me, I didn't know you could select with `input[type="checkbox"]`

### Can you hear me now?

The next thing to do is to listen for when something has been clicked, you can do so by adding in an event listnerer by writing:

`checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));`

Here we have the variable checkboxes (that selected all inputs with the tag "checkbox") and we use a `forEach` to loop over everything and runs a function called checkbox which calls an event listner.  The event listener will fire when the keyboard or mouse clicks and that runs a function called "`handleCheck`".

```
function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them inbetween!');
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
```

(lofty bit of code, I know, I'll get to it in a minute)

### Handle this check

I have written the function `handleCheck` that will now be the meat-n-taters of our javascript.  

the function takes in an event and we use a `let` variable (no `const` here because it'll change over time).

We have an if statement here in the function that checks to see if the user is holding down the shift key and if it's checked.  We do that by typing

```
if (e.shiftKey && this.checked) {
    // go ahead and do what we please
      }
```

What now we're going to do is loop over every single checkbox and look for the first one that's checked and the last one checked.  

We also need to make a variable called inbetween to see if something is checked inbtween each item (whew! Brain is hurting!).  

```
let inBetween = false;
if (e.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
		console.log(checkbox);
	});
}
```

### I can't brain

This was extremely difficult to wrap my brain around and will try to spell it out here.

```
if (checkbox === this || checkbox === lastChecked) {
	inBetween = !inBetween
}
```

What!?  

Here's where I wanted to give up however let's break this down a bit.

If the `checkbox` is true to this (this always throws me) OR `checkbox` is equal to `lastChecked` then `inBetween` is equal to the opposite of `inBetween`.  Yep, brain hurts.

If this checkbox is equal to "this" (the one that got check) and the checkbox is the last checked one, it's false it's true and if it's true it's false.  

An additional if statement is needed here.
```

 if (inBetween) {
        checkbox.checked = true;
      }
```

If the argument inBetween is brought in (this is a flag variable to see if it's true) and we'll set it to check with javascript.  And it works both ways from bottom to top.
