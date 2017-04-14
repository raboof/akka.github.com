var urlArr = window.location.href.split("/");
var domain = urlArr[0] + "//" + urlArr[2];

function sbtDependency(artifact) {
    return '"' + artifact.groupId + '" %% "' + artifact.artifactId + '" % "' + artifact.version + '"\n';
}
function gradleDependency(artifact) {
    return "compile '" + artifact.groupId + ":" + artifact.artifactId + "_" + artifact.scalaVersions[0] + ":" + artifact.version + "'\n";
}
function mavenDependency(artifact) {
    return '\n' +
        '<dependency>\n' +
        '  <groupId>' + artifact.groupId + '</groupId>\n' +
        '  <artifactId>' + artifact.artifactId + '_' + artifact.scalaVersions[0] + '</artifactId>\n' +
        '  <version>' + artifact.version + '</version>\n' +
        '</dependency>\n';
}

var makeModuleDescription = function (version, groupId, scalaVersions) {
    return function (artifactId) {
        return {
            groupId: groupId,
            artifactId: artifactId,
            scalaVersions: scalaVersions,
            version: version
        }
    }
};

function makeDependencies(projects, idPrefix) {
    var sbtDeps = '',
        gradleDeps = '',
        mavenDeps = '';

    projects.forEach(function (project) {
        sbtDeps += sbtDependency(project);
        gradleDeps += gradleDependency(project);
        mavenDeps += mavenDependency(project);
    });

    $("#" + idPrefix + "-dependencies-sbt").text(sbtDeps);
    $("#" + idPrefix + "-dependencies-gradle").text(gradleDeps);
    $("#" + idPrefix + "-dependencies-maven").text(mavenDeps);
}

$('ul.tabs li').click(function () {
    $el = $(this);
    var tabId = $el.attr('data-tab');
    $container = $el.closest('.container');

    $container.find('ul.tabs li').removeClass('current');
    $container.find('.tab-content').removeClass('current');

    $el.addClass('current');
    $container.children("#" + tabId).addClass('current')
});


$.get(domain + "/versions.json", function (data) {

    // akka definition
    var akkaObject = data["akka"];
    var akkaLatest = akkaObject["latest"];
    var latestAkkaVersion = akkaObject[akkaLatest["name"]]["latest"];

    // akka-http definition
    var akkaHttpObject = data["akka-http"];
    var akkaHttpLatest = akkaHttpObject["latest"];
    var latestAkkaHttpVersion = akkaHttpObject[akkaHttpLatest["name"]]["latest"];

    var akkaLatestProjects = akkaObject["latest"]["projects"].map(makeModuleDescription(latestAkkaVersion, akkaLatest["group_id"], akkaLatest["scala_versions"]));
    var akkaHttpLatestProjects = akkaHttpObject["latest"]["projects"].map(makeModuleDescription(latestAkkaHttpVersion, akkaHttpLatest["group_id"], akkaHttpLatest["scala_versions"]));

    makeDependencies(akkaHttpLatestProjects, "http");
    makeDependencies(akkaLatestProjects, "stable");

    // initalizes doc search
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
