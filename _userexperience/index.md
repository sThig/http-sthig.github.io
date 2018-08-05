---
layout: default
title: User Experience
image: ux.svg
---
<div class="d-flex" style="background-color: #e9ecef;">

  <div class="jumbotron mx-auto mb-0 py-3 px-5" style="max-width: 1200px">
    <div class="col-lg-10 mx-auto">

      <img width="50" height="50"
      class="rounded-circle float-left mr-2"
      src="/assets/img/internal/{{ page.image }}" />
      <h1 class="display-4">{{ page.title | escape }}</h1>
      <p class="lead">

Starting with ideas on cocktail napkins, to drying out markers on the whiteboard to full blown wireframes designed in Balsmiq, I own the entire design process with the user in mind at all times.

Diving into A/B testing, looking for interesting trends in data, having a huge amount of empathy for the user’s experience gives me so much energy and I find myself almost obsessed with a project’s initial start.

When I’m energetic about a project, I become an evangelist for it and can sell ice to eskimos (or stakeholders, developers or a design team).

For over two decades I’ve been in some form of creative role where the end user was in mind. Within the past decade I made the transition to a tech environment where I taught web design at UAB and at ProctorU where as a team, we implement the Agile way of creating products.

I am well versed in design, illustration, front end development (HTML, CSS, JS) and I play well with others.
      </p>
    </div>
  </div>
</div>
<div>
  <div class="d-flex justify-content-center">
    <div class="container-fluid">
      <div class="col-lg-10 mx-auto row d-flex justify-content-center mt-3" style="max-width: 1400px">
        {% for experiences in site.userexperience %}
          {% if experiences.passname == 'ux' %}
        <div class="card col-sm-12 col-lg-3 m-2">
          <div class="card-body d-flex flex-column">
            <div class="media">
              <div class="d-flex mr-3">
                <a href="{{ experiences.url }}">
                  <img width="40" height="40"
                  class="rounded-circle"
                  src="/assets/img/{{ experiences.image }} " alt="{{ experiences.title }}" />
                </a>
              </div>
              <div class="media-body">
                <h6 class="mb-1">{{ experiences.title }}</h6>
              </div>
            </div>
            <div class="d-flex flex-column" style="height: 105px;">
             <div class="p-2">
               <p class="text-muted">{{ experiences.excerpt }}</p>
             </div>
            </div>
            <div class=" flex-column align-items-end">
              <button type="button" class="btn btn-secondary btn-sm btn-block" onclick="location.href = '{{ experiences.url }}';">View project</button>
            </div>
          </div>
        </div>
        {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>
