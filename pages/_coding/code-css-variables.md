---
title: CSS Variables

layout: post
categories: [ javascript, css, code ]
image: code-illo.png
excerpt: A lesson in subtle CSS Variables and JS
passname: code
---

As a designer, CSS is my bread and butter however javascript can easily trip me up.  I took one of [Wes Bos's](https://wesbos.com/) classes that helped working with variables and manipulating them.  If you've never tried out Wes's [Javascript30](https://wesbos.com/) classes it's free and worth your time.

## CSS Variables

I knew all about variables in Sass and they are fun but I didn't know you could do it with regular old CSS, awesome!  An example would be adding some filters at the root.

```
:root {
  --base: #bada55;
  --spacing: 10px;
  --blur: 10px;
}
```

Then say if you wanted to apply those variables to all your image tags, it'd look something like:

```
img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}
```

(Please note, to evoke a CSS variable, you need to use **--** in your code or it won't work, this is much like Sass's **$**.)

## Javascript Control

This is where I always stumble and get a little confused however Wes does a fantastic job describing what to do in human terms to understand.

To control a variable in CSS there is a small bit of setup but nothing really difficult.  Let's say you wanted to grab all the inputs on the page, we'll use the querySelectorAll syntax.  Example

`const inputs = document.querySelectorAll('.controls input');`

What has been done here is we've assigned a variable (const) a name of "inputs" and what it'll do is query and select all elements on the DOM that are inputs.  

Next is to setup a function that will call the inputs variable.  That function would look like:

```
function handleUpdate() {
  const suffix = this.dataset.sizing  || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

}
```

In this function called `handleUpdate()` which has a variable assigned in it called suffix which calls a data attribute

  `const suffix = this.dataset.sizing  || '';`

	The dataset has a series of data attributes in the HTML which looks like this:

	`<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">`

(Dataset will reference all attributes, so you could have data-poop="💩" and it'd call it if you asked it in the console.log).

Because we want the dataset to select sizing or nothing, the syntax for that is

`|| '';`

Double pipes || means "or" and '' is an empty container.  This took me forever to learn.

The next part of the function is to set a property which is called from the CSS.

 ` document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)`

This part also trips me up a bit however all we're doing here is setting the style of the property using ES6 language (backtics and the ${} syntax).

Because there are many inputs in the project, we're going to do a `forEach` loop over all of them which is:

```
inputs.forEach(input => input.addEventListener('change', handleUpdate));

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```

Here what is happening is the forEach calls an event listener which is looking for a change or mousemove and when that happens we run the function `handleUpdate`.  The finished code can be viewed here:

<p data-height="265" data-theme-id="0" data-slug-hash="ajEjEr" data-default-tab="html,result" data-user="sthig" data-pen-title="CSS Variables" class="codepen">See the Pen <a href="https://codepen.io/sthig/pen/ajEjEr/">CSS Variables</a> by scott thigpen (<a href="https://codepen.io/sthig">@sthig</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
