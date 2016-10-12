---
layout: page
title: Get Involved
---

<div class="row">
	<div class="span8">
		<article>
            <h1>How you can help</h1>

            <h3>Akka is an open source project and everyone is encouraged to get involved! There are lots of ways you can contribute.</h3>

            <div class="get-involved-links">

                <h3 class="mailing">Join the mailing list</h3>
                <a href="//groups.google.com/forum/#!forum/akka-user">4,000+ members</a>

                <p>The <a href="//groups.google.com/forum/#!forum/akka-user">Akka mailing list</a> is where the Akka community meets. Asking and answering questions on the mailing list is a great way to share knowledge about Akka.</p>

                <p>While the mailing list is the best place to get quality answers to deeper questions, sometimes a quick chat may be what you need (and sometimes more fun as well), in which case you can head over to the <a href="https://gitter.im/akka/akka">akka/akka channel on gitter</a>, which is aimed for general community chatter about Akka.</p>

                <h3 class="stackoverflow">Contribute to Stack Overflow</h3>
                <a href="//stackoverflow.com/questions/tagged/akka">2,900+ questions</a>

                <p>Stack Overflow is a Q&amp;A site for programmers. Stack Overflow has a very active community of people asking and answering <a href="//stackoverflow.com/questions/tagged/akka">questions about Akka</a>. Users can vote on each others' contributions and earn reputation points.</p>

                <h3 class="bugs">Report bugs</h3>
                <a href="//github.com/akka/akka/issues">1,900+ bug reporters</a>

                <p>Bug reports help Akka improve, so please report any issues you have! Akka uses <a href="//github.com/akka/akka/issues">GitHub to track issues</a>. When you report bugs, make sure you include lots of detail, including reproducible tests-cases, example code, or anything else you think might help (like for example used operating system if the issue may be OS related).</p>

                <p>Even if you're not ready to fix issues yourself just yet, you can help out by verifying issues that have been reported by others. You can filter issues based on the module you care the most about (e.g. <a href="https://github.com/akka/akka/labels/t%3Acore">core</a>, or <a href="https://github.com/akka/akka/labels/t%3Acluster">cluster</a>), or look for issues tagged with the <a href="https://github.com/akka/akka/labels/0%20-%20new">new label</a>. You can assist by looking at these issues and doing some checking to confirm whether they're bugs or not. You could provide reproducible tests or a sample project, or even just ask the original reporter for more information.</p>

                <h3 class="patch">Patch the core</h3>
                <a href="//github.com/akka/akka/graphs/contributors">190+ committers</a>

                <p>Akka's code and documentation is hosted on <a href="//github.com/akka/akka">Github</a>. It's easy to <a href="//github.com/akka/akka">get the code and build Akka from source</a>.</p>

                <p>We care a lot about good documentation, and it’s a good place to start contributing as well. So if you feel you’d like to contribute some doc updates, here is a small guide to get you started with <a href="http://doc.akka.io/docs/akka/current/dev/documentation.html">compiling the docs</a>.</p>

                <p>You're welcome to work on any feature you like&mdash;Akka is open source after all!&mdash;and if you'd like some good ideas, look for issues tagged with the <a href="https://github.com/akka/akka/labels/community">community label</a>. These issues are ready and waiting for volunteers to pick them up, and if you want, you can always team up with someone else to work on it!</p>

                <p>If you’re not sure where to start, or need some hints with a tough problem when working on an issue you can pop into the <a href="https://gitter.im/akka/dev">akka/dev channel on gitter</a> where the core team and other contributors hang out and help each other work on tickets. You’re more than welcome to join that channel and ask Akka development related questions (note that for general “how to use Akka” style questions the <a href="https://gitter.im/akka/akka">akka/akka channel</a> is more appropriate).</p>

                <p>To keep our code tidy and to make sure we work together smoothly there are some <a href="https://github.com/akka/akka/blob/master/CONTRIBUTING.md">Developer & Contributor Guidelines</a> that you'll need to make sure you follow&mdash;for example, commit messages in Akka have  to abide to a certain style, so make sure you know how to write a nice one!</p>

                <h3 class="modules">Create extensions or plugins</h3>

                <p>You can add new features to Akka applications by creating an Akka Extension or Plugin (if a given module has pluggable elements).</p>

                <p><strong>Akka Extensions</strong> are implemented as simple stand-alone classes which can give you  a peek into Akka internals and can do slightly more powerful things than one normally could “from the outside”. To give you an idea what an Akka Extension looks and feels like - if you used Akka Serialization, Persistence or Cluster – those are all implemented as extensions! Here is a <a href="http://doc.akka.io/docs/akka/current/scala/extending-akka.html">guide about implementing extensions to get you started</a>.</p>

                <p><strong>Akka Persistence</strong> follows the plugin model, where each datastore has a related plugin implementing the storing and reading of events in a way specific to the datastore&mdash;those are implemented as community provided plugins. If there isn’t one available for your favourite datastore you can <a href="http://doc.akka.io/docs/akka/snapshot/scala/persistence.html#Storage_plugins">implement one</a>, or help with an <a href="http://akka.io/community/#plugins-to-akka-persistence">existing implementation</a>. The persistence module comes with a TCK (Technology Compatibility Kit)&mdash;a set of tests to help you implement a high quality plugin–so make sure you use it on your plugin!</p>

                <p>Community contributions are then highlighted on the <a href="http://akka.io/community/">akka.io/community</a> page so they are easily discoverable for other developers. To submit your project to this page simply issue a PR to the <a href="https://github.com/akka/akka.github.com">akka/akka.github.com</a> repository e.g. like <a href="https://github.com/akka/akka.github.com/pull/206">this one</a>.</p>

                <p><strong><em>Happy hakking!</em></strong></p>
            </div>

        </article>
	</div>
</div>
