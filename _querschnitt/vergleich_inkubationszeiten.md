---
title: Vergleich der Inkubationszeiten
layout: page
---


  {% for item in site.katalog %}
  {% assign inhalte = item.inhalte | where_exp: "item", "item.id contains 'inkubationszeit'" %}
  
  
  -------------------
  {{item.title}}:
  <li>{% for item in inhalte %} {{item.title}} {{ item.text | markdownify }}{% endfor %}</li>
  {% endfor %}  
