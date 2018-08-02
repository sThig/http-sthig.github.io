---
layout: post
title: Javascript Challenge Clock Face
date: 2018-07-07 13:11 -0500
categories: [ javascript, code ]
image: code-illo.png
excerpt: Coding a clock with vanilla js and a lot of math
---

### Tick Tock

Following Wes Bos's tutorials on vanilla javascript is great and he's such a good teacher.  He gave a nice run down of how you can use ES6's template litearals, CSS animations and math to create a functioning clock.  

### What I learned

More emphasis on `querySelector` having it grab the class of each hand of the clock to manipulate it like so:

`const hourHand = document.querySelector('.hour-hand');`

Once you have this (and minutes, seconds) you can then apply the math to each hand to rotate on a second, minute or hour (sadly math is not my strong suit so I had to really rely on the internet on how to make stuff rotate according to time).

### CSS animations

This was the fun part for me.  Taking the `.hand` class and adding in `transform` and `transition` I was able to get it to rotate not only around in the center (like a wagon wheel) but at a point of origin where I wanted. (Usually 'transform-origin' is at 50% and you have to set it at 100%).

Playing with the cubic-bezier in `transition-timing-function` is particularly gratifying when playing with it in the console log.

{% highlight css %}
  .hand {
      width:50%;
      height:6px;
      background:black;
      position: absolute;
      top:50%;
      transform-origin: 100%;
      transform: rotate(90deg);
      transition: all 0.05s;
      transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
    }
    {% endhighlight %}

### The Result

Here is the code for my clock interface.  I didn't focus much on style and left it more for Javascript (will get to more styled and well designe stuff, later.)

<p data-height="265" data-theme-id="light" data-slug-hash="QxevLW" data-default-tab="js" data-user="sthig" data-embed-version="2" data-pen-title="Clock Face Javascript" class="codepen">See the Pen <a href="https://codepen.io/sthig/pen/QxevLW/">Clock Face Javascript</a> by scott thigpen (<a href="https://codepen.io/sthig">@sthig</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
