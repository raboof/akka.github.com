---
# front matter to make jekyll process the file
# to avoid request overhead, put all little custom akka.io js snippets in this file
layout: null
---

$(function () {

    // algolia search box hook

    // set by jekyll
    var latestAkkaVersion = "{{ page.current_akka_version }}"

    // initalizes doc search if there is a search box
    // depends on external algolia js being loaded
    var searchRef = $("#search-ref-docs")
    if (searchRef.length > 0) {
        $("#docs-language").change(function (el) {
            searchRef.find("li.lang").addClass("hidden");
            searchRef.find("li#" + el.currentTarget.value.toLowerCase()).removeClass("hidden");
        })

        docsearch({
            apiKey: '543bad5ad786495d9ccd445ed34ed082',
            indexName: 'akka_io',
            inputSelector: '#search-scala',
            algoliaOptions: {
                hitsPerPage: 5,
                facetFilters: '[' + '["language:scala","language:general"]' + ',"version:' + latestAkkaVersion + '"]'
            }
        })

        docsearch({
            apiKey: '543bad5ad786495d9ccd445ed34ed082',
            indexName: 'akka_io',
            inputSelector: '#search-java',
            algoliaOptions: {
                hitsPerPage: 5,
                facetFilters: '[' + '["language:java","language:general"]' + ',"version:' + latestAkkaVersion + '"]'
            }
        })
    }


    // sticky search, makes the search bar stick to the top of the page
    if ($("#stickySearch")) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 150) {
                $('#stickySearch').addClass('stickyFixed')
                $('#stickyFill').addClass('stickyFill')
            }
            if ($(window).scrollTop() < 151) {
                $('#stickySearch').removeClass('stickyFixed')
                $('#stickyFill').removeClass('stickyFill')
            }
        })
    }

    // tabbed boxes (on the docs page)
    $('.docTabPanel .tabPanelList li').on('click', function () {
        var $elem = $(this),
            $panel = $elem.closest('.docTabPanel')
        $panel.find('.tabPanelList li.active').removeClass('active')
        $elem.addClass('active');
        //figure out which panel to show
        var panelToShow = $elem.attr('rel')
        //hide current panel
        $panel.find('.tabPanel.active').hide(0, showNextPanel);
        //show next panel
        function showNextPanel() {
            $elem.removeClass('active')
            $('#' + panelToShow).show(0, function () {
                $(this).addClass('active')
        })
        }
    })

    // content toggle, makes a href to "#something" with class .mini-toggler toggle the visibility
    // of all elements with class "something"
    $(".mini-toggler").each(function(idx, toggler) {
        toggler.addEventListener("click", function(e) {
            e.preventDefault()
            var $toggler = $(toggler),
                $toggleContent = $(this.hash)

            // add remove class name from both toggler and toggle content
            if ($toggleContent.hasClass("active")) {
                $toggler.removeClass("toggler-active")
                $toggleContent.removeClass("active")
            } else {
                $toggler.addClass("toggler-active")
                $toggleContent.addClass("active")
            }
        })
    })

});