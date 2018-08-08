---
layout: default
title: Web and Video Animation
image: animation.svg
---

<div class="container">
  <div class="page-header">

    <img class="rounded-circle" width="50" src="/assets/img/internal/{{ page.image }}" alt="Icon">
    <h4 class="display-4">Animation</h4>
    <h5 class="page-subtitle w-50 w-md-100 m-auto">Animations optimized for web and video production.</h5>

</div>
<div class="mx-auto col-lg-10 d-flex justify-content-center px-4">
  <div class="col-lg-6">When I was a kid I saw Disney’s Jungle Book and remember thinking “This is what I want to be in life, an Animator.” After college I spent months creating several portfolios that I sent out to every animation house in the world (at the time, around 30) and was rejected by everyone. I was crushed but it never crushed my spirit.
When I startd my animation career I got a phone call one day from Dreamworks saying they needed an extra animator for a project called “Shrek” and I got to be part of the team. My childhood dream was realized.
I use both After Effects and hand drawn frames to create my illustrations. It’s an extremely timely procress but a fun one.</div>
  <div class="col-lg-6">
    <img class="mx-auto d-block img-fluid" src="/assets/img/cats/animation/panda_finish.gif" alt="Panda">
  </div>
</div>

  <div class="col-lg-12 mt-2">
    <div>
      <div class="mx-auto row d-flex justify-content-center mt-3" style="max-width: 1400px">
        {% for anim in site.animations %}
          {% if anim.passname == 'animation' %}
        <div class="card col-sm-12 col-lg-3 m-2">
          <div class="card-body d-flex flex-column">
            <div class="media">
              <div class="d-flex mr-3">
                <a href="{{ anim.url }}">
                  <img width="40" height="40"
                  class="rounded-circle"
                  src="/assets/img/{{ anim.image }} " alt="{{ anim.title }}" />
                </a>
              </div>
              <div class="media-body">
                <h6 class="mb-1">{{ anim.title }}</h6>
              </div>
            </div>
            <div class="d-flex flex-column" style="height: 105px;">
             <div class="p-2">
               <p class="text-muted">{{ anim.excerpt | truncatewords:30 | truncatewords: 30 | truncate: 100 | truncate: 30 | truncate: 5 | truncate_words: 5 | truncate_words: 10 }}</p>
             </div>
            </div>
            <div class=" flex-column align-items-end">
              <button type="button" class="btn btn-secondary btn-sm btn-block" onclick="location.href = '{{ anim.url }}';">View project</button>
            </div>
          </div>
        </div>
        {% endif %}
        {% endfor %}
      </div>
    </div>
