---
layout: documentation
title: Documentation
redirect_from: "/downloads"
---


<section class="wrapper">
  <div class="row">
    <div class="sevencol">
      <h1>Getting started</h1>
      <p>New to Akka, want to get up and running and learn the basics as fast as possible? Check out the get started section of the documentation!</p>
    </div>
    <div class="fivecol">
      <a class="btn getStarted" href="/documentationContents.html">Get started</a>
    </div>
  </div>
</section>

<section class="wrapper">
  <div class="row">
    <div class="docModuleGrid">
       <div class="box">
         <h1>Akka Actors</h1>
         <span class="underLine"></span>
         <p>
           At the core of Akka: A model for concurrency and distribution without all the pain of threading primitives.
         </p>
         <div class="docMeta">
           <div class="docMetaContent">
             <h2>Scala</h2>
             <a href="http://doc.akka.io/docs/akka/current/scala/index-actors.html">Reference</a>
             <a href="http://doc.akka.io/api/akka/current/akka/actor/index.html">API</a>
           </div>
           <div class="docMetaContent">
             <h2>Java</h2>
             <a href="http://doc.akka.io/docs/akka/current/java/index-actors.html">Reference</a>
             <a href="http://doc.akka.io/japi/akka/current/index.html?akka/actor/package-summary.html">API</a>
           </div>
         </div>
         <div class="docTabPanel">
           <ul class="tabPanelList">
             <li rel="3-panel-sbt" class="active">sbt</li>
             <li rel="3-panel-gradle">gradle</li>
             <li rel="3-panel-maven">maven</li>
             <li rel="3-panel-link">link</li>
           </ul>
           <div id="3-panel-sbt" class="tabPanel active">
             <p>"com.typesafe.akka" %% "akka-actor" % "{{page.current_akka_version}}"</p>
           </div>
           <div id="3-panel-gradle" class="tabPanel">
             <p>compile 'com.typesafe.akka:akka-actor_{{page.current_java_scala_version}}:{{page.current_akka_version}}'</p>
           </div>
           <div id="3-panel-maven" class="tabPanel">
             <p>
               &lt;dependency&gt;<br>
               &nbsp;&nbsp;&lt;groupId&gt;com.typesafe.akka&lt;/groupId&gt;<br>
               &nbsp;&nbsp;&lt;artifactId&gt;akka-actor_{{page.current_java_scala_version}}&lt;/artifactId&gt;<br>
               &nbsp;&nbsp;&lt;version&gt;{{page.current_akka_version}}&lt;/version&gt;<br>
               &lt;/dependency&gt;<br>
             </p>
           </div>
           <div id="3-panel-link" class="tabPanel">
            <p>
              <a href="http://repo1.maven.org/maven2/com/typesafe/akka/akka-actor_{{page.current_java_scala_version}}/{{page.current_akka_version}}/akka-actor_{{page.current_java_scala_version}}-{{page.current_akka_version}}.jar">
              http://repo1.maven.org/maven2/com/typesafe/akka/akka-actor_{{page.current_java_scala_version}}/{{page.current_akka_version}}/akka-actor_{{page.current_java_scala_version}}-{{page.current_akka_version}}.jar
              </a>
            </p>
           </div>
         </div>
      </div>
      <div class="box">
        <h1>Akka Streams</h1>
        <span class="underLine"></span>
        <p>
          An intuitive and safe way to do asynchronous, non-blocking backpressured stream processing. 
        </p>
        <div class="docMeta">
          <div class="docMetaContent">
            <h2>Scala</h2>
            <a href="http://doc.akka.io/docs/akka/current/scala/stream/index.html">Reference</a>
            <a href="http://doc.akka.io/api/akka/current/akka/stream/index.html">API</a>
          </div>
          <div class="docMetaContent">
            <h2>Java</h2>
            <a href="http://doc.akka.io/docs/akka/current/java/stream/index.html">Reference</a>
            <a href="http://doc.akka.io/japi/akka/current/index.html?akka/stream/package-summary.html">API</a>
          </div>
        </div>
        <div class="docTabPanel">
          <ul class="tabPanelList">
            <li rel="2-panel-sbt" class="active">sbt</li>
            <li rel="2-panel-gradle">gradle</li>
            <li rel="2-panel-maven">maven</li>
            <li rel="2-panel-link">link</li>
          </ul>
          <div id="2-panel-sbt" class="tabPanel active">
            <p>"com.typesafe.akka" %% "akka-stream" % "{{page.current_akka_version}}"</p>
          </div>
          <div id="2-panel-gradle" class="tabPanel">
            <p>compile 'com.typesafe.akka:akka-stream_{{current_java_scala_version}}:{{page.current_akka_version}}'</p>
          </div>
          <div id="2-panel-maven" class="tabPanel">
            <p>
              &lt;dependency&gt;<br>
              &nbsp;&nbsp;&lt;groupId&gt;com.typesafe.akka&lt;/groupId&gt;<br>
              &nbsp;&nbsp;&lt;artifactId&gt;akka-stream_{{page.current_java_scala_version}}&lt;/artifactId&gt;<br>
              &nbsp;&nbsp;&lt;version&gt;{{page.current_akka_version}}&lt;/version&gt;<br>
              &lt;/dependency&gt;<br>
            </p>
          </div>
          <div id="2-panel-link" class="tabPanel">
            <p>
              <a href="http://repo1.maven.org/maven2/com/typesafe/akka/akka-stream_{{page.current_java_scala_version}}/{{page.current_akka_version}}/akka-stream_{{page.current_java_scala_version}}-{{page.current_akka_version}}.jar">
              http://repo1.maven.org/maven2/com/typesafe/akka/akka-stream_{{page.current_java_scala_version}}/{{page.current_akka_version}}/akka-stream_{{page.current_java_scala_version}}-{{page.current_akka_version}}.jar
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="box">
        <h1>Akka Http</h1>
        <span class="underLine"></span>
        <p>
          Modern, fast, asynchronous, streaming-first HTTP server and client.
        </p>
        <div class="docMeta">
          <div class="docMetaContent">
            <h2>Scala</h2>
            <a href="http://doc.akka.io/docs/akka-http/current/scala.html">Reference</a>
            <a href="http://doc.akka.io/api/akka-http/current/akka/http/scaladsl/index.html">API</a>
          </div>
          <div class="docMetaContent">
            <h2>Java</h2>
            <a href="http://doc.akka.io/docs/akka-http/current/java.html">Reference</a>
            <a href="http://doc.akka.io/japi/akka-http/current/">API</a>
          </div>
        </div>
        <div class="docTabPanel">
          <ul class="tabPanelList">
            <li rel="1-panel-sbt" class="active">sbt</li>
            <li rel="1-panel-gradle">gradle</li>
            <li rel="1-panel-maven">maven</li>
            <li rel="1-panel-link">link</li>
          </ul>
          <div id="1-panel-sbt" class="tabPanel active">
            <p>"com.typesafe.akka" %% "akka-http" % "{{page.current_akka_http_version}}"</p>
          </div>
          <div id="1-panel-gradle" class="tabPanel">
            <p>compile 'com.typesafe.akka:akka-http_{{current_java_scala_version}}:{{page.current_akka_http_version}}'</p>
          </div>
          <div id="1-panel-maven" class="tabPanel">
            <p>
              &lt;dependency&gt;<br>
              &nbsp;&nbsp;&lt;groupId&gt;com.typesafe.akka&lt;/groupId&gt;<br>
              &nbsp;&nbsp;&lt;artifactId&gt;akka-http_{{page.current_java_scala_version}}&lt;/artifactId&gt;<br>
              &nbsp;&nbsp;&lt;version&gt;{{page.current_akka_http_version}}&lt;/version&gt;<br>
              &lt;/dependency&gt;<br>
            </p>
          </div>
          <div id="1-panel-link" class="tabPanel">
            <p>
              <a href="http://repo1.maven.org/maven2/com/typesafe/akka/akka-http_{{page.current_java_scala_version}}/{{page.current_akka_http_version}}/akka-http_{{page.current_java_scala_version}}-{{page.current_akka_http_version}}.jar">
              http://repo1.maven.org/maven2/com/typesafe/akka/akka-http_{{page.current_java_scala_version}}/{{page.current_akka_http_version}}/akka-http_{{page.current_java_scala_version}}-{{page.current_akka_http_version}}.jar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="docModuleGrid">
      <div class="box">
        <h1>Akka Cluster</h1>
        <span class="underLine"></span>
        <p>Achieve resiliance and elasticity by distributing your system over multiple nodes.</p>
        <div class="docMeta">
          <div class="docMetaContent">
            <h2>Scala</h2>
            <a href="http://doc.akka.io/docs/akka/current/common/cluster.html">Reference</a>
            <a href="http://doc.akka.io/api/akka/current/akka/cluster/index.html">API</a>
          </div>
          <div class="docMetaContent">
            <h2>Java</h2>
            <a href="http://doc.akka.io/docs/akka/current/common/cluster.html">Reference</a>
            <a href="http://doc.akka.io/japi/akka/current/index.html?akka/cluster/package-summary.html">API</a>
          </div>
        </div>
        <div class="docTabPanel">
          <ul class="tabPanelList">
            <li rel="4-panel-sbt" class="active">sbt</li>
            <li rel="4-panel-gradle">gradle</li>
            <li rel="4-panel-maven">maven</li>
            <li rel="4-panel-link">link</li>
          </ul>
          <div id="4-panel-sbt" class="tabPanel active">
            <p>"com.typesafe.akka" %% "akka-cluster" % "{{page.current_akka_version}}"</p>
          </div>
          <div id="4-panel-gradle" class="tabPanel">
            <p>compile 'com.typesafe.akka:akka-cluster_{{page.current_java_scala_version}}:{{page.current_akka_version}}'</p>
          </div>
          <div id="4-panel-maven" class="tabPanel">
            <p>
              &lt;dependency&gt;<br>
              &nbsp;&nbsp;&lt;groupId&gt;com.typesafe.akka&lt;/groupId&gt;<br>
              &nbsp;&nbsp;&lt;artifactId&gt;akka-cluster_{{page.current_java_scala_version}}&lt;/artifactId&gt;<br>
              &nbsp;&nbsp;&lt;version&gt;{{page.current_akka_version}}&lt;/version&gt;<br>
              &lt;/dependency&gt;<br>
            </p>
            </p>
          </div>
          <div id="4-panel-link" class="tabPanel">
            <p>
              <a href="http://repo1.maven.org/maven2/com/typesafe/akka/akka-cluster_{{page.current_java_scala_version}}/{{page.current_akka_version}}/akka-cluster_{{page.current_java_scala_version}}-{{page.current_akka_version}}.jar">
              http://repo1.maven.org/maven2/com/typesafe/akka/akka-cluster_{{page.current_java_scala_version}}/{{page.current_akka_version}}/akka-cluster_{{page.current_java_scala_version}}-{{page.current_akka_version}}.jar
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="box">
        <h1>Cluster Sharding</h1>
        <span class="underLine"></span>
        <p>Distribute your actors across the cluster based on their identity.</p>
        <div class="docMeta">
          <div class="docMetaContent">
            <h2>Scala</h2>
            <a href="http://doc.akka.io/docs/akka/current/scala/cluster-sharding.html">Reference</a>
            <a href="http://doc.akka.io/api/akka/current/akka/cluster/sharding/index.html">API</a>
          </div>
          <div class="docMetaContent">
            <h2>Java</h2>
            <a href="http://doc.akka.io/docs/akka/current/java/cluster-sharding.html">Reference</a>
            <a href="http://doc.akka.io/japi/akka/current/index.html?akka/cluster/sharding/package-summary.html">API</a>
          </div>
        </div>
        <div class="docTabPanel">
          <ul class="tabPanelList">
            <li rel="5-panel-sbt" class="active">sbt</li>
            <li rel="5-panel-gradle">gradle</li>
            <li rel="5-panel-maven">maven</li>
            <li rel="5-panel-link">link</li>
          </ul>
          <div id="5-panel-sbt" class="tabPanel active">
            <p>"com.typesafe.akka" %% "akka-cluster-sharding" %  "{{page.current_akka_version}}"</p>
          </div>
          <div id="5-panel-gradle" class="tabPanel">
            <p>compile 'com.typesafe.akka:akka-cluster-sharding_{{page.current_java_scala_version}}:{{page.current_akka_version}}'</p>
          </div>
          <div id="5-panel-maven" class="tabPanel">
            <p>
              &lt;dependency&gt;<br>
              &nbsp;&nbsp;&lt;groupId&gt;com.typesafe.akka&lt;/groupId&gt;<br>
              &nbsp;&nbsp;&lt;artifactId&gt;akka-cluster-sharding_{{page.current_java_scala_version}}&lt;/artifactId&gt;<br>
              &nbsp;&nbsp;&lt;version&gt;{{page.current_akka_version}}&lt;/version&gt;<br>
              &lt;/dependency&gt;<br>
            </p>
          </div>
          <div id="5-panel-link" class="tabPanel">
            <p>
              <a href="http://repo1.maven.org/maven2/com/typesafe/akka/akka-cluster-sharding_{{page.current_java_scala_version}}/{{page.current_akka_version}}/akka-cluster-sharding_{{page.current_java_scala_version}}-{{page.current_akka_version}}.jar">
              http://repo1.maven.org/maven2/com/typesafe/akka/akka-cluster-sharding_{{page.current_java_scala_version}}/{{page.current_akka_version}}/akka-cluster-sharding_{{page.current_java_scala_version}}-{{page.current_akka_version}}.jar
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="box">
        <h1>Distributed Data</h1>
        <span class="underLine"></span>
        <p>Eventually consistent, highly read and write available, low latency data</p>
        <div class="docMeta">
          <div class="docMetaContent">
            <h2>Scala</h2>
              <a href="http://doc.akka.io/docs/akka/current/scala/distributed-data.html">Reference</a>
               <a href="http://doc.akka.io/api/akka/current/akka/cluster/ddata/index.html">API</a>
             </div>
             <div class="docMetaContent">
               <h2>Java</h2>
               <a href="http://doc.akka.io/docs/akka/current/java/distributed-data.html">Reference</a>
               <a href="http://doc.akka.io/japi/akka/current/index.html?akka/cluster/ddata/package-summary.html">API</a>
             </div>
           </div>
           <div class="docTabPanel">
             <ul class="tabPanelList">
               <li rel="7-panel-sbt" class="active">sbt</li>
               <li rel="7-panel-gradle">gradle</li>
               <li rel="7-panel-maven">maven</li>
               <li rel="7-panel-link">link</li>
             </ul>
             <div id="7-panel-sbt" class="tabPanel active">
               <p>"com.typesafe.akka" %% "akka-distributed-data" % "{{page.current_akka_version}}"</p>
             </div>
             <div id="7-panel-gradle" class="tabPanel">
               <p>compile 'com.typesafe.akka:akka-distributed-data_{{page.current_java_scala_version}}:{{page.current_akka_version}}'</p>
             </div>
             <div id="7-panel-maven" class="tabPanel">
               <p>
                 &lt;dependency&gt;<br>
                 &nbsp;&nbsp;&lt;groupId&gt;com.typesafe.akka&lt;/groupId&gt;<br>
                 &nbsp;&nbsp;&lt;artifactId&gt;akka-distributed-data_{{page.current_java_scala_version}}&lt;/artifactId&gt;<br>
                 &nbsp;&nbsp;&lt;version&gt;{{page.current_akka_version}}&lt;/version&gt;<br>
                 &lt;/dependency&gt;<br>
               </p>
             </div>
             <div id="7-panel-link" class="tabPanel">
               <p>
                <a href="http://repo1.maven.org/maven2/com/typesafe/akka/akka-distributed-data_{{page.current_java_scala_version}}/{{page.current_akka_version}}/akka-distributed-data_{{page.current_java_scala_version}}-{{page.current_akka_version}}.jar">
              http://repo1.maven.org/maven2/com/typesafe/akka/akka-distributed-data_{{page.current_java_scala_version}}/{{page.current_akka_version}}/akka-distributed-data_{{page.current_java_scala_version}}-{{page.current_akka_version}}.jar
                </a>
              </p>
             </div>
           </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="docModuleGrid">
        <div class="box">
          <h1>Alpakka</h1>
          <span class="underLine"></span>
          <p>Akka Stream connectors for integrating with other technologies</p>
          <div class="docMeta">
             <div>
               <h2>Scala and Java</h2>
             </div>
             <div class="docMetaContent">
               <a href="http://developer.lightbend.com/docs/alpakka/current/">Reference</a>
               <a href="https://github.com/akka/alpakka/">Repository</a>
             </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <div class="row">
        <div>
           <a href="other-releases.html">Information about other releases of Akka</a>
        </div>
    </div>
  
  
</section>