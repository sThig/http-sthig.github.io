---
layout: post
title: Javascript Challenge - Drum Kit
date: 2018-07-06 14:22 -0500
categories: [ javascript, code ]
image: code-illo.png
excerpt: A lesson in query selectors, event listeners and someting called BANG!
---

[Javascript](https://www.javascript.com/) for me is difficult (however I think it's difficult for many people).  I've found doing basic coding challenges help you advance quickly by the use of repetition.  

I have found that [Wes Bos's](https://wesbos.com/) coding challenges ([link](https://javascript30.com/)) are indeed, _boss_.  While I've done his **30 days of Javascript** in the past, I'm revisiting it again as to fine tune where I'm at in my coding career.

I'm using [Code Pen's](https://codepen.io/) ([link](https://codepen.io/)) site to log my challenges and embedding them here.

### Drum Kit Challenge

Below is the challenge that was to make a drum kit using vanilla es6 javascript.  What seemed like a simple task ended up being much more difficult than I'd guessed (imagine that, code is hard).

<p data-height="265" data-theme-id="light" data-slug-hash="LrKqga" data-default-tab="js" data-user="sthig" data-embed-version="2" data-pen-title="Drum Kit" class="codepen">See the Pen <a href="https://codepen.io/sthig/pen/LrKqga/">Drum Kit</a> by scott thigpen (<a href="https://codepen.io/sthig">@sthig</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## What I learned

I know HTML and CSS fairly well, honestly I could live in CSS all day long as I enjoy it, it's a challenge and I love seeing it go live on the screen instantly.  Given this wasn't a design challenge, I didn't pay that much attention to style and more focused on the code itself.

### Data Attributes

In my professional life, data attributes are something used often and it can be particularly confusing.  A data attribute lives within your html and allows someone to make up something specific as long as the word `data` is proceeds the attribute.  So it could be `data-music` or `data-key`, but not `key`.

In the drum kit challenge, `data-key` was referenced several times to call not only an audio wave but also a corresponding key on your keyboard.  

### Shh, listen for it

It seems event listeners are everywhere in code.  In this coding challenge the first thing I had to look for is when the user hits the key 'down', to listen for it.  It's done by typing

`window.addEventListener('keydown', playSound);`

> We are asking javascript to listen for the event of "keydown" on the entire window.  When 'keydown' has been executed, run the function 'playSound'

### To Query, or Query All, y'all

This part has always been a bit tricky for me with data attributes. What we want to do is query each key pressed and to do that we have an option to query a single keypress or all, here we want just one single One

`const key = document.querySelector(.key[data-key="${e.keyCode}"]);` (_back-tics were removed so the code would highlight properly_).

To break down this strip of code, `const` is ES6's way of saying **variable** (it's a constant variable unlike `let` which will let you change the variable).  The const is assigned the word **key** and what **key** refers to is a `querySelector` which selects an individual element in a document.  (_Fwew, that's a mouthful!_).

I want my `querySelector` to reference the class **.key** (for example `<div data-key="70" class="key">`) and inside that, to get the `data-key`.  Using ES6's template strings (a $ sign) to select `${e.keyCode}`.

>keyCode: Get the Unicode value of the pressed keyboard key.

### !Bang

Bang is one of my favorite commands and what **bang** means in code is the opposite.  So if I were to open the door, I'd say:

`const door = Scott opens the door`

But in code if I wanted to say Scott _not_ opens the door I'd type

`(!door)` in my code.  Weird, but fun little thing to know.

In this coding challenge we needed to know that if a key is pressed that doesn't have an audio file associated with it, we wanted to exit out of the function that issues the audio command.  So for that we needed to say:

`if(!audio) return;`

>The return statement stops the execution of a function and returns a value from that function.

### Adding some class

Being someone who works mostly in CSS and design, I find myself struggling to add and remove classes in Javascript.  It seems like this would be easy but damned if I'm not stumped on it daily and have to scour the internet for answers.  Wes, in his tutorial, sums it up pretty well.

In the drum kit, to make the little animation happen from the css, you have to add and remove a class.  You do this by `classList` (then with the `.add` which `.remove` works too) in ES6.

`key.classList.add('playing');` (**key** is the const assigned earlier in this post.).

This part has always been easier for me, it's the removal of a class that is difficult.  This part of the challenge was, indeed,  challenging because of `transitionend`.

>The transitionend event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to "none", then the event will not be generated.

It's confusing because it sounds like "transitioned" and that's what my brain defaults to when I'm writing it out.  Then my code breaks and I spend an hour screaming at my computer.

So if we take:

`const keys = document.querySelectorAll('.key');`

and run a `forEach` loop on the array of keys with:

>The forEach() method executes a provided function once for each array element.

`keys.forEach(key => key.addEventListener('transitionend', removeTransition));`

We can tell it to listen for each key, add 'transitionend' to it and when that has executed, then run the function, `removeTransition`.

`function removeTransition(e) {
  if(e.propertyName !== 'transform') return; //skip it if it's not a transform
  this.classList.remove('playing');
}
`
### Thoughts

I wrote this article specifically for me to regurgitate what I learned from the challenge.  I find that trying to write out what you are saying, or teach it to someone else (or talking to your [rubber ducky](https://en.wikipedia.org/wiki/Rubber_duck_debugging)) is a great way to cement it in your own brain thus when I'm faced with this in production code, I'm not so intimidated by it.
