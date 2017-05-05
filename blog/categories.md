---
layout: page
title: All Articles By Category
header: All Articles By Category
group: navigation
---
{% include JB/setup %}

<div class="ninecol">
{% for category in site.categories %}
  <h2 id="{{ category[0] }}-ref">Category: {{ category[0] | join: "/" }}</h2>
  <ul>
    {% assign pages_list = category[1] %}  
    {% include JB/pages_list %}
  </ul>
{% endfor %}
</div>

{% include blog-navbar.html %}