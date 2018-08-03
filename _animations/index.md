---
layout: default
title: Animation
image: animation.svg
---
<div class="d-flex" style="background-color: #e9ecef;">

  <div class="jumbotron mx-auto mb-0 py-3 px-5" style="max-width: 1200px">
    <div class="col-lg-12 mx-auto">

      <img width="50" height="50"
      class="rounded-circle float-left mr-2"
      src="/assets/img/internal/{{ page.image }}" />
      <h1 class="display-4">{{ page.title | escape }}</h1>
      <p class="lead">
      When I was a kid I saw Disney’s Jungle Book and remember thinking “This is what I want to be in life, an Animator.” After college I spent months creating several portfolios that I sent out to every animation house in the world (at the time, around 30) and was rejected by everyone. I was crushed but it never crushed my spirit.

When I startd my animation career I got a phone call one day from Dreamworks saying they needed an extra animator for a project called “Shrek” and I got to be part of the team. My childhood dream was realized.

I use both After Effects and hand drawn frames to create my illustrations. It’s an extremely timely procress but a fun one.
      </p>
    </div>
  </div>
</div>
<div>
  <div class="d-flex justify-content-center">
    <div class="container-fluid">
      <div class="col-lg-10 mx-auto row d-flex justify-content-center mt-3" style="max-width: 1400px">
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
               <p class="text-muted">{{ anim.excerpt }}</p>
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
  </div>
</div>
