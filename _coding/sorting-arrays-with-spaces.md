---
layout: post
title: Sorting Arrays with Spaces
date: 2018-07-13 14:22 -0500
categories: [ javascript, code ]
image: code-illo.png
excerpt: alphabatize an array of bands that includes spaces is tricky
passname: code
---

When I started coding, it seemed arrays would always be the bane of my learning.  I don't know why, they are simple and very powerful to use but I'd constantly get tripped up with them.  So I try to practice working with arrays as much as possible.

Today's challenge is to alphabatize an array of bands that includes spaces, tricky because you have to watch for the space between them, alphabatize them AND skip the bands that start with "The" or "A" .

<p data-height="265" data-theme-id="0" data-slug-hash="xJBJve" data-default-tab="css,result" data-user="sthig" data-pen-title="Array sorting" class="codepen">See the Pen <a href="https://codepen.io/sthig/pen/xJBJve/">Array sorting</a> by scott thigpen (<a href="https://codepen.io/sthig">@sthig</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### .sort

First we need to make a variable that will sort the band names.  We do that with this line:

```
const sortedBands = bands.sort(function (a, b){

})
```

Sort has a function that will take in **a** and **b** which is like two apples and sorting which one is bigger and not.

### strippers, no reg(r)ex!

[Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) is still one of those things that evades me and is still a challenge.  We write a function that will strip out A, The and An but not Anold or Theodore.  We do that by writing the function this way

```
function strip(bandName) {
  return bandName.replace(/^(a |the |an) /i, '').trim();
}
```

Then in our const known as sortedBands, we'll add strip such as this

```
const sortedBands = bands.sort(function (a, b){
  if(strip(a) > strip(b)) {
    return 1;

  } else {
    return -1;
  }
})
```

Cool that works but let's refactor a bit and go with a turnirary operation

```
const sortedBands = bands.sort(function (a, b){
 return strip(a) > strip(b) ? 1 : -1;
})
```

Let's add a fat arrow function by refactoring more:

```
const sortedBands = bands.sort((a, b) => {
 return strip(a) > strip(b) ? 1 : -1;
})
```

### Querying

Now that all the functions are in place it's time to query and select the html id "bands" by typing

document.querySelector('#bands').innterhtml = sortedBands.map(band => `<li${band}</li>`).join('');

Hook this up with the html and boom!  A sorted list!
