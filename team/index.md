---
layout: page
title: Team
---

<h2>Akka Team</h2>

{% for member in site.data.team %}
  {% assign loopindex = forloop.index | modulo: 2 %}
  {% if loopindex == 1 %}
    <div class="row">
  {% endif %}
    <div class="span6">
        <div class="profile-pic-wrap"><img class="profile-pic" src="{{ member.avatar }}" /></div>
        <span class="profile-name">{{ member.name }}</span>
        <span class="profile-title">{{ member.title }}</span>
        <span class="profile-twitter-link"><a href="https://twitter.com/{{ member.twitter }}">@{{ member.twitter }}</a></span>
        <p class="profile-text">{{ member.desc }}</p>
    </div>
  {% if loopindex == 0 %}
    </div>
  {% endif %}
{% endfor %}

<h3>Honorary Members</h3>

{% for member in site.data.alumni_team %}
<div class="row">
	<div class="span6">
		<div class="profile-pic-wrap"><img class="profile-pic" src="{{ member.avatar }}" /></div>
		<span class="profile-name">{{ member.name }}</span>
		<span class="profile-title">{{ member.title }}</span>
		<span class="profile-twitter-link"><a href="https://twitter.com/{{ member.twitter }}">@{{ member.twitter }}</a></span>
		<p class="profile-text">{{ member.desc }}.</p>
	</div>
</div>

{% endfor %}

<div class="row">
	<div class="span12">
		<h2>Contributors</h2>
		<div class="committers">
			<ul>
				<li>Derek Williams</li>
				<li>Debasish Ghosh</li>
				<li>Martin Krasser</li>
				<li>Ivan Porto Carrero</li>
				<li>Karim Osman</li>
        		<li>Raymond Roestenburg</li>
        		<li>Piotr Gabryanczyk</li>
				<li><a href="http://lamp.epfl.ch/~phaller">Philipp Haller</a></li>
        		<li>Mathias Doenitz</li>
        		<li>Rich Dougherty</li>
			</ul>
		</div>
	</div>
</div>
