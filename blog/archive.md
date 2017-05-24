---
layout: news
title : Archive
header : Post Archive
group: navigation
---
<section class="wrapper">
	<div class="row">
		<div class="ninecol">
			<ul class="newsContainer">
				{% for post in site.posts %}
					<li>
						<a href="{{ site.baseurl }}{{ post.url }}">
							<div class="newsDate">
								<p>{{ post.date | date: "%b" }}</p>
								<p>{{ post.date | date: "%d" }}</p>
								<p>{{ post.date | date: "%Y" }}</p>
							</div>
							<div class="newsContent">
								<h1>{{ post.title }}</h1>
								<p>{{ post.content | strip_html | truncatewords: 50 }}</p>
							</div>
						</a>
					</li>
				{% endfor %}
			</ul>
		</div>
    	{% include blog-navbar.html %}
	</div>
</section>