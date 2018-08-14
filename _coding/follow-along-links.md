---
layout: post
title: Follow along links
date: 2018-07-11 14:22 -0500
categories: [ javascript, code ]
image: code-illo.png
excerpt: Dazzle your audience with an interesting way to hover over links.
passname: code
---

I see many new and different ways people use to highlight links, I tried my hand at Wes Bos's version to see if I could do it with some minimum javascript (and with a few lines, it worked!).

This is based off Stripe's very groovy menu (if you've never seen it, check it out by clicking here).  The code uses a few things I am new and coordinates always throw me off (get it???) but talking it through really helped nail it down.

<p data-height="265" data-theme-id="0" data-slug-hash="qywKLX" data-default-tab="html,result" data-user="sthig" data-pen-title="Follow Along Links" class="codepen">See the Pen <a href="https://codepen.io/sthig/pen/qywKLX/">Follow Along Links</a> by scott thigpen (<a href="https://codepen.io/sthig">@sthig</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### My Triggers!

To make this menu (and any links on the page) we first have to select all the `a` tags by using a `querySelector`.  So let's make a variable named triggers and select all `a` tags

`  const triggers = document.querySelectorAll('a');`

We can now create an element with javascript (I love doing this) and add a class from our CSS file.  The css we will refer to is a simple pill:

```
.highlight {
  transition: all 0.2s;
  border-bottom:2px solid white;
  position: absolute;
  top:0;
  background:white;
  left:0;
  z-index: -1;
  border-radius:20px;
  display: block;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
```

We'll make another variable called `highlight` and create a span element.

const highlight = document.createElement('span');

Then we'll take highlight and add a class to it with the `classList` tag.

`highlight.classList.add('highlight');`

and append it with

`document.body.appendChild(highlight);`

What we've done is taken the variable `highlight` which is creating an element `span` then adding the class `highlight`.

### Thar Be Dragons

This gets into very unfamiliar territory when we venture into coordinates however I'll try to talk it through.

We need a function that will know where and what size to highlight.  We do this with `getBoundingClientRect` ([link](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)) in this function:

```
function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
};
```

There's a lot going on here, no doubt.  Let's take it line by line.

We create a function called `highlightLink` inside of that we have several moving parts.  First of all to familiarize ourselves with [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

> The returned value is a DOMRect object which is the union of the rectangles returned by getClientRects() for the element, i.e., the CSS border-boxes associated with the element. The result is the smallest rectangle which contains the entire element, with read-only left, top, right, bottom, x, y, width, and height properties describing the overall border-box in pixels. Properties other than width and height are relative to the top-left of the viewport.

We make a variable called `linkCoords` that contains getBoundingClientRect and then create an object that will have all our ids in it, we call that `coords`.  In it we'll assign width, height, then take bot of those and add the scroll y and x to it so we will not be thrown off when a user is scrolling.

The width and height are determined with  `highlight.style.width and height = ${coords.width}px;` (backtics ommitted so the syntax formats write in my markdown post) and making sure `px` is added on so it'll not just return a number, but a number and pixel.

### Loopers

Finally back to the `triggers` variable which we'll now loop over all a tags, listen if a mouse enters in on any of them and if so, run the function with all the coordinates in it.

`triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));`

With that, the javascript executes nicely and now you have this nice, resizable hover that will surely dazzle users (right!?).
