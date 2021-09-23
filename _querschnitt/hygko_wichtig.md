---
title: Essentielles Wissen
layout: page
---


  {% for item in site.katalog %}
  {% assign inhalte = item.inhalte | where_exp: "item", "item.kategorie contains 'hygkowichtig'" %}
  <h2>{{item.title}}</h2><ul>
  {% for item in inhalte %}<li title="Quelle: {{ item.quellename }}">{{ item.text | markdownify }} </li>
  {% endfor %}  
  </ul>
  {% endfor %}  
