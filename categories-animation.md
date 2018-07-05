---
layout: page
permalink: /categories/
title: categories
---

{% for post in site.categories.animation %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
