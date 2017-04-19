---
layout: news-main
title: Article Archive
redirect_from: "news/all-news"
group: navigation
---

<div class="ninecol">
	<ul class="newsContainer">
		{% for p in site.posts %}
		    {% unless p.categories contains 'news' %}
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
			{% endunless %}
		{% endfor %}
	</ul>
</div>

{% include blog-navbar.html %}