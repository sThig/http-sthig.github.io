---
layout: post
title: ES6 Sticky Nav
categories: [ javascript, css, code ]
image: code-illo.png
excerpt: How to make a navbar stick using ES6
passname: code
---

I started Javascript later on in life skipping jQuery (for better or for worse).  In fact the interesting thing is I learned React.JS before even learning ES6 (crazy, I know...but that's how I roll).

I am following along one of (Wes Bos's)[https://wesbos.com/] tutorials on how to make a stick nav.  As usual, his courses are very in depth and easy to follow.

<p data-height="265" data-theme-id="0" data-slug-hash="yqmqKL" data-default-tab="html,result" data-user="sthig" data-pen-title="Sticky Nav" class="codepen">See the Pen <a href="https://codepen.io/sthig/pen/yqmqKL/">Sticky Nav</a> by scott thigpen (<a href="https://codepen.io/sthig">@sthig</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Functional Scrolling

In the codepen.io mockup you'll see my menu and the items contained in it.  We need to find a way to grab all this and make it "go" (or a function).

We do that by first creating a variable that will query all things with the id #main.

`const nav = document.querySelector('#main');`

Now that we have our variable "Nav" we can start to build our first function.  

```
function fixNav() {


}
```

And on the window, we'll add an event listener

`window.addEventListner('scroll', fixNav)`

What the event listener does is that it will continually sit and listen for any scrolling on the site and when that happens, it'll run our function, `fixNav`.

We need to know where the top of the navbar is so we can start to make this function...well, function.  So another variable is created called

`const topOfNav = nav.offsetTop;`

>The HTMLElement.offsetTop read-only property returns the distance of the current element relative to the top of the offsetParent node.

Then in our function we can write:

```
function fixNav() {
  console.log(topOfNav);

}
```

Now anytime we open up the devtools and scroll, we can see the where the top is (and far it is from the top, in this project it's 542 pixels).  

### Scrolly

Now that we know the height of the scroll bar to the top of the window (542px) we can flesh out our function a bit more.

```
function fixNav() {
  if(window.scrollY >= topOfNav) {
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
}
```

What we've done here is said when scroll on the Y axis (up and down) is greater than or equal to the `topOfNav` variable, then add the class `fixed-nav` otherwise, remove the class.

When we add the class `.fixed-nav` we will alter the navbar a bit with by:

```.fixed-nav nav {
    position: fixed;
    box-shadow: 0 5px rgba(0,0,0,0.1);
  }
  ```

This makes the nav bar "sticky" while the user continues to scroll (a nice user experience).

### Removing the Jank

When you make something fixed, you remove all the spacing from it so things look janky at that point and time (I have no idea if janky is a real word, but it's fun to say).  So we need to offset a bit in our function.

`document.body.style.paddingTop = navoffsetHeight`

What we've done here is added some padding into our body, but we're doing it dynamically with using nav.offsetHeight

```
function fixNav() {
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}
```

### Logo goodness

When you scroll up on this particular project you lose the logo and wouldn't it be just oh so neat if we could make that pop out when the navbar becomes fixed?  Javascript to the rescue!

Using our fixed nav class, we'll make a child (I call them children, could be something else)

```.fixed-nav li.logo {
    max-width: 500px;
  }
  ```

We have stated here that anytime the fixed nav element is called, the list item logo will be at max width, 500px.

And it's pulling from a previous CSS class:

```
li.logo {
  max-width: 0;
  overflow: hidden;
  background: white;
  transition: all 5s;
  font-weight: 600;
  font-size: 30px
}
```

The transition makes all the animation magic happen and now when the menu becomes sticky, it schwoops (yes, "schwoops") right in.  (Also you can't animate `width`, hence why we're using `max-width` here).
