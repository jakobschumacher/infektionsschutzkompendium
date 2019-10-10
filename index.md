---
layout: home
---
<ul class="posts">
  <li>
    <h1 id="posts-label">Erkrankungen</h1>
  </li>
{% assign items = site.katalog | sort: 'title' %}
{% for item in items %}

{% if item.katalog %}
<a class="post-link" href="{{ item.katalog | relative_url }}">
  <h2 class="post-title">{{ item.title | escape }}</h2>
</a>

{% else %}
<a href="katalog/{{ item.title | downcase  | replace: ' ', '-' }}.html"><h2 class="post-title">{{ item.title | escape }}</h2></a>
{% endif %}

{% endfor %}

{% comment %}
{% for staff_member in site.merkblatt %}
  <h2>{{ staff_member.title }} - {{ staff_member.position }}</h2>
  <p>{{ staff_member.content | markdownify }}</p>
{% endfor %}
{% endcomment %}