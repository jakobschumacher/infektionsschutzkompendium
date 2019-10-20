---
layout: default
---
<ul class="posts">
  <li>
    <h1 id="posts-label">Erkrankungen</h1>
  </li>
  
{% assign items = site.katalog | sort: 'title' %}
{% for item in items %}

{% if item.katalog %}
<a class="post-link" href="{{ item.katalog | relative_url }}">
  {{ item.title | escape }}
</a><br /><br />

{% else %}
<a class="post-link" href="katalog/{{ item.title | downcase  | replace: ' ', '-' }}.html">
  {{ item.title | escape }}<br /><br />
</a>
{% endif %}

{% endfor %}

