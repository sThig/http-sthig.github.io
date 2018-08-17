---
title: Flex Panels
layout: post
date: '2018-08-08 01:00:00'
image: code-illo.png
passname: code
excerpt: A flexbox project that transitions panels in a lovely way
---

CSS is one of my favorite types of way to design, knowing a bit of Javascript helps with this tremendously to make my ideas come to life.  What's more, I love using [Flexbox]https://css-tricks.com/snippets/css/a-guide-to-flexbox/) within CSS.

This project (a course taught by [Wes Bos](https://courses.wesbos.com/) ) is a way to present images in a smooth animated way.

The Flex Panels demo

<p data-height="265" data-theme-id="0" data-slug-hash="BPGyXy" data-default-tab="css,result" data-user="sthig" data-pen-title="Flex Panels Image Gallery" class="codepen">See the Pen <a href="https://codepen.io/sthig/pen/BPGyXy/">Flex Panels Image Gallery</a> by scott thigpen (<a href="https://codepen.io/sthig">@sthig</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Setup

In setting up this project I had to add some Flexbox to the css.  There are several panels in this project named .panel and I want to evenly space them across the screen.  Easy peasy with taking the css class .panels and adding `display: flex;`

```
.panels {
	min-height:100vh;
	overflow: hidden;
	display: flex;
}

```

Then to evenly space them out across the screen I added flex: 1; to .panel

```
.panel {
      flex:1;
      background:#6B0F9C;
      box-shadow:inset 0 0 0 5px rgba(255,255,255,0.1);
      color:white;
      text-align: center;
      align-items:center;
}
```


This is great however the items (the text in this case) is all at the top so I need to get that centers vertically and horizontally.  So to do that I need to add some flexbox alignment AND make the children of .panel display flex as well.  We do this by adding this to the element:

```
.panel {
	flex:1;
	justify-content: center;
	align-items: center;
	display: flex;}
```

### Children, behave!

CSS is full of fun little tricks, grabbing elements with a few commands really helps here.  

```
.panel > *:first-child { transform: translateY(-100%); }
.panel > *:last-child { transform: translateY(100%); }
```

When you use the > sign and say "first (or last) child", the code above will get only the first or last children and translate their positions on the Y axis thus moving them off screen for our project.

### Flexing your muscles

The last part of the CSS setup is that when a panel is being clicked on, it should expand while the others stay small.  To do this we'll take the class of `.open` and add` flex: 5;`, this means that when the open class is assigned, it will take up 5 times more than any other panel.  

### The Javascript

The last part to this puzzle is the javascript which is the fun part (and for me, the challenging part).

The first part is to do a query selector all and grab all the panels with this line:

`const panels = document.querySelectorALL('.panels');`

(document.querySelectorAll will get anything with the class you tell it to grab, here it'd be `.panels`)

The next part is to write the function that will toggle the classes to transition the words in and out of our project, we do this by writing:

```
function toggleOpen() {
  this.classListe.toggle('open');
}
```

From there we'll write a forEach loop that listens for a click (or when a user clicks on a panel) and we'll do that by writing an event listener.

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

To break this down, our variable (const) "panels" is being looped over forEach one listening for a click, when clicked, run the function "toggleOpen".

From there we run the function and boom, things work... they just don't end

### Looking for transitions

There are many transitions that happen as the function ends, we're looking for a particular one, for that we write another function

```
    function toggleActive(e) {
      console.log(e.propertyname)
      if(e.propertyNamelincludes('flex')) {
        this.classList.toggle('open-active');
      }
    }
```

This function will grab an event (e in the (argument) of the function) and if the event includes the word `flex`, then toggle the class `.open active`

This will then return everything back it's original state.
