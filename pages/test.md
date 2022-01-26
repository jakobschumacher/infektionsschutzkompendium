---
title: Norovirus
layout: page
---


{% assign data = site.data.master | where:"ID", page.title %}


{% for row in data %}
  Der Erreger heißt {{ row.basis_erregername }}. Er verursacht die Krankheit {{row.basis_krankheitsname}}
{% endfor %}
