---
layout: post
title:  "Site Working"
date:   2018-06-27 13:27:57 -0500
categories: ux
image: iterations.png
excerpt: This is a test excerpt for UX
---

Below

I've been learning javascript and jekyllrb, learning partials have been great and I've enjoyed it.  Nice to see this site taking shape.

Trying out code blocks:

{% highlight ruby %}
window.onload = function refreshWord() {
  setInterval(function randomWord() {
    const words = ['Engineer', 'Developer', 'Illustrator', 'Cyclist', 'Artist'];
    const randomGenerator = Math.floor(Math.random() * words.length);
    document.getElementById('textswap').innerHTML = words[randomGenerator];
  }, 2000);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  $('.navbar-nav>li>a').on('click', function() {
    console.log('clicked');
    $('.navbar-collapse').collapse('hide');
  });
};
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]: https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
