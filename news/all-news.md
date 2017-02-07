---
layout: news-main
title: News Archive
---

<div class="ninecol">
	<ul class="newsContainer">
		{% for p in site.posts %}
			<li>
				<a href="{{ site.baseurl }}{{ p.url }}">
					<div class="newsDate">
						<p>{{ p.date | date: "%b" }}</p>
						<p>{{ p.date | date: "%d" }}</p>
						<p>{{ p.date | date: "%Y" }}</p>
					</div>
					<div class="newsContent">
						<h1>{{ p.title }}</h1>
						<p>{{ p.content | strip_html | truncatewords: 50 }}</p>
					</div>
				</a>
			</li>
		{% endfor %}
	</ul>
</div>
<div class="threecol latestArticles">
	<h2>Latest articles</h2>
	<ul>
		{% for p in site.posts limit: 5 %}
			{% if forloop.index <= 1 %}
			{% else %}
				<li>
					<p>{{ p.date | date: "%b %d %Y" }}</p>
					{% if p.link-out %}
					<a href="{{ p.link-out }}">{{ p.title }}</a>
					{% else %}
					<a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a>
				{% endif %}
				</li>
			{% endif %}
		{% endfor %}	
	</ul>
	<a href="{{ site.baseurl }}/news/all-news.html" class="btn sec">Full archive</a>
</div>