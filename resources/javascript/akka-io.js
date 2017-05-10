---
# front matter to make jekyll process the file
# to avoid request overhead, put all little custom akka.io js snippets in this file
layout: null
---

// algolia search box hook
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

// sticky search, makes the search bar stick to the top of the page
$(document).ready(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $('#stickySearch').addClass('stickyFixed');
            $('#stickyFill').addClass('stickyFill');
        }
        if ($(window).scrollTop() < 151) {
            $('#stickySearch').removeClass('stickyFixed');
            $('#stickyFill').removeClass('stickyFill');
        }
    });
});

// tabbed boxes (on the docs page)
$(function() {
    $('.docTabPanel .tabPanelList li').on('click', function () {
        var $panel = $(this).closest('.docTabPanel');
        $panel.find('.tabPanelList li.active').removeClass('active');
        $(this).addClass('active');
        //figure out which panel to show
        var panelToShow = $(this).attr('rel');
        //hide current panel
        $panel.find('.tabPanel.active').hide(0, showNextPanel);
        //show next panel
        function showNextPanel() {
            $(this).removeClass('active');
            $('#' + panelToShow).show(0, function () {
                $(this).addClass('active');
            });
        }
    });
});


// mini toggler - not sure this one is actually used - TODO investigate and remove
(function() {

    // get all the mini-togglers
    var togglers = document.querySelectorAll(".mini-toggler");

    // loop through the togglers and bind a click event
    for (var i = 0; i < togglers.length; i++) {
        togglers[i].addEventListener("click", function(e) {
            e.preventDefault();

            // set the vars to work with
            var toggle_content = document.getElementById(this.hash.replace("#", "")),
                group = this.getAttribute("data-toggler-group"),
                add_class = function(el, classname) {
                    el.className += " "+classname;
                },
                remove_class = function(el, classname) {
                    el.className = el.className.replace(classname, "").trim();
                };

            // if we have a data-toggler-group-attribute - toggle between them
            if (group) {
                var group_togglers = document.querySelectorAll("[data-toggler-group="+group+"]");
                for (var i = 0; i < group_togglers.length; i++) {
                    // leave the current element you clicked alone
                    if (group_togglers[i] == this) { continue; }

                    // remove toggler active class
                    remove_class(group_togglers[i], "toggler-active");
                    // remove toggler content active class
                    remove_class(document.getElementById(group_togglers[i].hash.replace("#", "")), "active");
                }
            }

            // add/remove class name from both toggler and toggle content
            if (toggle_content.className.indexOf("active") == -1) {
                add_class(this, "toggler-active");
                add_class(toggle_content, "active");
            } else {
                remove_class(toggle_content, "active");
                remove_class(this, "toggler-active");
            }
        });
    }

})();