---
layout: news-main
title: News & Articles
redirect_from: "news"
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
{% include blog-navbar.html %}