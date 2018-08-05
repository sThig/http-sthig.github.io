---
layout: default
title: User Interface
image: ui.svg
---
<div class="d-flex" style="background-color: #e9ecef;">

  <div class="jumbotron mx-auto mb-0 py-3 px-5" style="max-width: 1200px">
    <div class="col-lg-10 mx-auto">

      <img width="50" height="50"
      class="rounded-circle float-left mr-2"
      src="/assets/img/internal/{{ page.image }}" />
      <h1 class="display-4">{{ page.title | escape }}</h1>
      <p class="lead">
      In 1994 I spent around 3 hours loading little floppy discs up in my very tiny macintosh to finally experience some software called "Photoshop".  After inserting the last disc, my computer crashed and I spent another half day trying to get it installed.  

      For the past 20 years I've been immersed in Adobe's Photoshop and Illustrator.  As technology progressed, so have I using apps like Sketch, After Effects, Premier, Final Cut Pro, Keynote, Flash (yes, Flash... it just won't die) and Balsamiq for prototyping.

      111I love market research and it's something that gives me a lot of energy to get behind a project.  When behind a project I love to communicate that to the stakeholders with convincing excitement.  I can see color patterns in my head and if I've had enough coffee, I can hear all the colors too!  I keep up on the latest trends in web design (both with visual and front end coding trends) and in the end, I'm very concerned with the user's experience.
      </p>
    </div>
  </div>
</div>
<div>
  <div class="d-flex justify-content-center">
    <div class="container-fluid">
      <div class="col-lg-10 mx-auto row d-flex justify-content-center mt-3" style="max-width: 1400px">
        {% for interfaces in site.userinterface %}
          {% if interfaces.passname == 'ui' %}
        <div class="card col-sm-12 col-lg-3 m-2">
          <div class="card-body d-flex flex-column">
            <div class="media">
              <div class="d-flex mr-3">
                <a href="{{ interfaces.url }}">
                  <img width="40" height="40"
                  class="rounded-circle"
                  src="/assets/img/{{ interfaces.image }} " alt="{{ interfaces.title }}" />
                </a>
              </div>
              <div class="media-body">
                <h6 class="mb-1">{{ interfaces.title }}</h6>
              </div>
            </div>
            <div class="d-flex flex-column" style="height: 105px;">
             <div class="p-2">
               <p class="text-muted">{{ interfaces.excerpt }}</p>
             </div>
            </div>
            <div class=" flex-column align-items-end">
              <button type="button" class="btn btn-secondary btn-sm btn-block" onclick="location.href = '{{ interfaces.url }}';">View project</button>
            </div>
          </div>
        </div>
        {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>
