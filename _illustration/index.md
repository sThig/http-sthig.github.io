---
layout: default
title: Illustration
image: illustration.svg
url: illustration
---

<div class="d-flex" style="background-color: #e9ecef;">

  <div class="jumbotron mx-auto mb-0 py-3 px-5" style="max-width: 1200px">
    <div class="col-lg-10 mx-auto">

      <img width="50" height="50"
      class="rounded-circle float-left mr-2"
      src="/assets/img/internal/{{ page.image }}" />
      <h1 class="display-4">{{ page.title | escape }}</h1>
      <p class="lead">

      In the 90s I got my first illustration project which was to illustrate a flyer for a frat party. It was my first illustration project that got me hooked which led to bigger clients like BBVA/Compass bank, The Wall Street Journal, 1Dreamworks, Coca Cola, Snapple and Toyota to name a few.

      For over 20 years I illustrated for companies across the world and down to the hometown repair shop. The tools I used were always Adobe Illustrator and Photoshop. In fact I know Illustrator so well that I rarely even use a sketch to work off of now-a-days.

      I won an award

      Recently I’ve abandoned Illustrator for Affinity’s Designer and Photo (I did this because I think Adobe’s subscription based model is a rip-off and honestly Affinity is better).
      </p>
    </div>
  </div>
</div>
<div>
  <div class="d-flex justify-content-center">
    <div class="container-fluid">
      <div class="col-lg-10 mx-auto row d-flex justify-content-center mt-3" style="max-width: 1400px">
        {% for illustration in site.illustration %}
          {% if illustration.passname == 'illustration' %}
        <div class="card col-sm-12 col-lg-3 m-2">
          <div class="card-body d-flex flex-column">
            <div class="media">
              <div class="d-flex mr-3">
                <a href="{{ illustration.url }}">
                  <img width="40" height="40"
                  class="rounded-circle"
                  src="/assets/img/{{ illustration.image }} " alt="{{ illustration.title }}" />
                </a>
              </div>
              <div class="media-body">
                <h6 class="mb-1">{{ illustration.title }}</h6>
              </div>
            </div>
            <div class="d-flex flex-column" style="height: 105px;">
             <div class="p-2">
               <p class="text-muted">{{ illustration.excerpt }}</p>
             </div>
            </div>
            <div class=" flex-column align-items-end">
              <button type="button" class="btn btn-secondary btn-sm btn-block" onclick="location.href = '{{ illustrations.url }}';">View project</button>
            </div>
          </div>
        </div>
        {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>
