$("#blog-feed").rss("http://letitcrash.com/rss", {
  limit: 3,
  template: "<div class='feed-container'><ul class='feed-entries'>{entry}<div class='feed-date'>{date}</div><div class='feed-title'><a href='{url}'>{title}</div></a><div class='feed-author'>By <span class='author-text'>{author}</span></div><div class='feed-body'>{shortBody}</div>{/entry}</ul></div>",

});