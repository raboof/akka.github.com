---
layout: page
title: Akka News
---

<div class="row">
	<div class="span8">
		<h2>Most Recent</h2>
		{% assign mostRecent = site.posts.first %} 
		<div class="news-title" style="font-size: 22px; padding-top: 14px; padding-bottom: 4px;"><a href="{{ mostRecent.url }}">{{ mostRecent.title }}</a></div>
		<div class="news-date">{{ mostRecent.date | date: "%B %d %Y "}}</div>
		<div class="news-body" style="padding-top: 10px;">{{ mostRecent.content }}</div>
	</div>
	<div class="span4">
		<h2 style="margin-bottom: 20px;">Past News Items</h2>
		{% for p in site.posts limit: 9 %}
			{% if forloop.index <= 1 %}
			{% else %}
				<div class="news-item">
					<div class="news-date">{{ p.date | date: "%b %d %Y" }}</div>
					<div class="news-title"><a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a></div>
					<div class="news-body">{{ p.content | strip_html | truncatewords: 30 }}</div>
				</div>			
			{% endif %}
		{% endfor %}		
		<div class="centered"><a href="{{ site.baseurl }}/news/all-news.html">Full Index of News Stories</a></div>
	</div>
</div>