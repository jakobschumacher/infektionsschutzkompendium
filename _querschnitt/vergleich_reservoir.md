---
title: Vergleich der Reservoire
layout: page
---

<table>
  {% for item in site.katalog %}
  {% assign inhalte = item.inhalte | where_exp: "item", "item.id contains 'reservoir'" %}
  
  <tr>
    <td>{{item.title}}</td>
    <td>{% for item in inhalte %} {{ item.text | markdownify }}{% endfor %}</td>
  </tr>
  {% endfor %}  
</table>



