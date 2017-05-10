---
# front matter to make jekyll process the file
layout: null
---

$(function () {

    // set by jekyll
    var latestAkkaVersion = "{{ page.current_akka_version }}";

    // initalizes doc search if there is a search box
    // depends on external algolia js being loaded
    var searchRef = $("#search-ref-docs");
    if (searchRef.length > 0) {
        $("#docs-language").change(function (el) {
            searchRef.find("li.lang").addClass("hidden");
            searchRef.find("li#" + el.currentTarget.value.toLowerCase()).removeClass("hidden");
        });

        docsearch({
            apiKey: '543bad5ad786495d9ccd445ed34ed082',
            indexName: 'akka_io',
            inputSelector: '#search-scala',
            algoliaOptions: {
                hitsPerPage: 5,
                facetFilters: '[' + '["language:scala","language:general"]' + ',"version:' + latestAkkaVersion + '"]'
            }
        });

        docsearch({
            apiKey: '543bad5ad786495d9ccd445ed34ed082',
            indexName: 'akka_io',
            inputSelector: '#search-java',
            algoliaOptions: {
                hitsPerPage: 5,
                facetFilters: '[' + '["language:java","language:general"]' + ',"version:' + latestAkkaVersion + '"]'
            }
        });
    }

});
