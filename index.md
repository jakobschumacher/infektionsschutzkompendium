---
layout: default
title:  "Infektionsschutzkompendium"
date:   2019-01-18 16:38:47 +0100
---
{% for post in site.posts %}
  <article class="{% if forloop.first %}first{% elsif forloop.last %}last{% else %}middle{% endif %}">
		<div class="article-head">
			<h2 class="title"><a href="/{{ post.url }}/" class="js-pjax">{{ post.title }}</a></h2>
			<p class="date">{{ post.date | date: "%b %d, %Y" }}</p>
		</div><!--/.article-head-->
		<div class="article-content">
		{{ post.long_description }}
		<a href="/{{ post.url }}/" class="full-post-link js-pjax">Read more</a>
		</div><!--/.article-content-->
	</article>
	{% if forloop.last %}{% else %}<div class="separater"></div>{% endif %}
{% endfor %}



# Hier ist die Trennung
{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
