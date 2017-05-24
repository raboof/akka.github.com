---
layout: page
title: All Articles by Tag
header: All Articles by Tag
group: navigation
---
{% include JB/setup %}

<div class="wrapper">
	<div class="row">
		<ul class="tag_box inline">
		{% assign tags_list = site.tags | sort %}
  		{% include JB/tags_list %}
		</ul>

        {% assign tags_list = site.tags | sort %}
		{% for tag in tags_list %}
		<h2 id="{{ tag[0] }}-ref">{{ tag[0] | capitalize }}</h2>
  		<ul>
		    {% assign BASE_PATH = site.baseurl %}
			{% assign pages_list = tag[1] | sort "date" %}
    		{% include JB/pages_list %}
  		</ul>
		{% endfor %}
	</div>
</div>