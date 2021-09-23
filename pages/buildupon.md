---
layout: page
---
# Inhalte
* Die Inhalte stammen zum größten Teil von den Webseiten des Robert Koch-Instituts

# Bildnachweis
<table>
  {% for item in site.katalog %}
  <tr>
    <td>{{item.title}}: 
    <a href="{{item.basisdaten.bildcredits}}">{{ item.basisdaten.bildautor }}</a></td>
  </tr>
  {% endfor %}  
</table>

# Hosting
* Diese Seite wird gehostet von [Github.com](https://github.com) 

# Verwendete Software
* Atom-Editor
* Jekyll
* Git
* Ubuntu

# Design
* [Plainwhite](http://jekyllthemes.org/themes/PlainWhite-Jekyll/)

