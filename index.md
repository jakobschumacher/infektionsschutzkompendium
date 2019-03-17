---
title:  "Infektionsschutzkompendium"
layout: default
---

{% assign items = site.katalog | sort: 'title' %}
{% for item in items %}

{% if item.katalog %}
<h3><a href="{{ item.katalog }}">{{ item.title }}</a></h3>
{% else %}
<h3><a href="katalog/{{ item.title | downcase  | replace: ' ', '-' }}.html">{{ item.title }}</a></h3>
{% endif %}

<ul class="smalllist">
{% if item.interview %}
<span class="blockstyle"><a href="{{ item.interview }}">Interviewleitfaden</a></span>
{% endif %}
{% if item.aktion %}
  <span class="blockstyle"><a href="{{ item.aktion }}">Maßnahmen</a></span>
{% endif %}
{% if item.fortbildung %}
<span class="blockstyle"><a href="{{ item.fortbildung }}">Minifortbildung</a></span>
{% endif %}
</ul>
{% endfor %}
