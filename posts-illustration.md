---
layout: post
title: Illustration
category: illustration
---

{% for post in site.categories.illustration %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
