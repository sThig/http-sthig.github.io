---
layout: default
title: code
image: code.svg
---
<div class="d-flex" style="background-color: #e9ecef;">

  <div class="jumbotron mx-auto mb-0 py-3 px-5" style="max-width: 1200px">
    <div class="col-lg-12 mx-auto">

      <img width="50" height="50"
      class="rounded-circle float-left mr-2"
      src="/assets/img/internal/{{ page.image }}" />
      <h1 class="display-4">{{ page.title | escape }}</h1>
      <p class="lead">

      One of the biggest challenge of a designer is code, this is why I’ve spent years immersing myself with front end code (HTML, CSS, JS). I love nothing more than to take a design comp and then convert it over to an actual website. I enjoy building with Bootstrap’s framework and coding from the ground up. Being immersed in a team that uses Agile, GitHub and Atom to deploy code, I’m no stranger to this either.

      When I’m done making pixel perfect ui/ux wireframes and comps, I code those visual elements to go on the web. I also review old code, technical debt and convert it into current code to keep a website fresh.

      My favorite flavors of code are HAML, SASS (scss), ES6 and ReactJS.
      </p>
    </div>
  </div>
</div>
<div>
  <div class="d-flex justify-content-center">
    <div class="container-fluid">
      <div class="col-lg-10 mx-auto row d-flex justify-content-center mt-3" style="max-width: 1400px">
        {% for code in site.coding %}
          {% if code.passname == 'code' %}
        <div class="card col-sm-12 col-lg-3 m-2">
          <div class="card-body d-flex flex-column">
            <div class="media">
              <div class="d-flex mr-3">
                <a href="{{ code.url }}">
                  <img width="40" height="40"
                  class="rounded-circle"
                  src="/assets/img/{{ code.image }} " alt="{{ code.title }}" />
                </a>
              </div>
              <div class="media-body">
                <h6 class="mb-1">{{ code.title }}</h6>
              </div>
            </div>
            <div class="d-flex flex-column" style="height: 105px;">
             <div class="p-2">
               <p class="text-muted">{{ code.excerpt }}</p>
             </div>
            </div>
            <div class=" flex-column align-items-end">
              <button type="button" class="btn btn-secondary btn-sm btn-block" onclick="location.href = '{{ code.url }}';">View project</button>
            </div>
          </div>
        </div>
        {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>
