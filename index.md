---
title:  "Infektionsschutzkompendium"
layout: default
---
<!-- <form action="{{ site.baseurl }}/search.html" method="get">
  <label for="search-box">Search</label>
  <input type="text" id="search-box" name="query">
  <input type="submit" value="search">
</form> -->


{% assign items = site.katalog | sort: 'title' %}
{% for item in items %}

{% if item.katalog %}
<h3><a href="{{ item.katalog }}">{{ item.title }}</a></h3>
{% else %}
<h3><a href="katalog/{{ item.title | downcase  | replace: ' ', '-' }}.html">{{ item.title }}</a></h3>
{% endif %}
<!--
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
-->
{% endfor %}
