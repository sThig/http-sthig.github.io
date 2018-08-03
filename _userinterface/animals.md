---
layout: page
title: "A list of animals"
permalink: "/animals/"
image: cats/ui/main_stage_1.gif
---

<ul>
  {% for animal in site.animals %}
    <li>
      <a href="{{ animal.url }}">{{ animal.title }}</a>
      - {{ animal.headline }}
    </li>
  {% endfor %}
</ul>
