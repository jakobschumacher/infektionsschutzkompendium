---
layout: default
basisdaten:
  bild: assets/portfolio.png
---

<ul class="posts">
  <li>
    <h1 id="posts-label">Infektionskrankheiten</h1>
  </li>
  

{% assign items = site.katalog | sort: 'title' %}
{% for item in items %}
<h2><a class="post-link" href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></h2>
{% endfor %}

</ul>  

  <ul class="posts">
    <li>
      <h1 id="posts-label">Querschnittsthemen</h1>
    </li>
            
    
{% assign items = site.querschnitt | sort: 'title' %}
    {% for item in items %}
    <h2><a class="post-link" href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></h2>
    {% endfor %}
    
      </ul>  