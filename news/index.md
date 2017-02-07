---
layout: news-main
title: News
---

<div class="ninecol">
	<div class="box selArticle">
		{% assign mostRecent = site.posts.first %} 
		<div class="selArticleHeader">
			<div class="date">
				<p>{{ mostRecent.date | date: "%B %d"}}</p>
				<p>{{ mostRecent.date | date: "%Y"}}</p>
			</div>
			<h1>{{ mostRecent.title }}</h1>
		</div>
		<div class="selArticleContent">
			{{ mostRecent.content }}
		</div>
	</div>
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