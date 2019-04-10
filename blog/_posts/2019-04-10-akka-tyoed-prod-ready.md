---
layout: post
title: Akka 2.5.22 Brings Akka Typed To Production Ready
author: Patrik Nordwall 
short: Akka 2.5.22 Brings Akka Typed To Production Ready
category: news
tags: [announcement,typed]
canonical_url: https://www.lightbend.com/blog/akka-2-5-22-brings-akka-typed-to-production-ready
---

After much testing and intense development of a few important features we are confident that Akka Typed has the quality and performance to be used in production. We have released Akka 2.5.22, which includes [this version of Akka Typed](https://doc.akka.io/docs/akka/current/typed/guide/index.html).

It's still marked as [may change](https://doc.akka.io/docs/akka/current/common/may-change.html), which means
that API or semantics can change without warning or deprecation period. For Akka Typed we have iterated over the APIs for a long time so we don't expect any major changes, but your feedback is very much welcome. Such changes, if any, will be collected and performed in Akka 2.6.0 rather than in upcoming 2.5.x patch versions.
This will give you a good period of stability without having to worry about changes in each version. We will of course backport critical bug fixes.

## Why Akka Typed?

The new Actor APIs are known as Akka Typed because the actors must declare what messages types they can handle. Messages are sent via a location transparent handle to the actor, so called `ActorRef`. It's this `ActorRef` in Akka Typed that has a message type parameter, as well as the corresponding type in the behavior of the
actor. Thereby you can only send messages that are part of the actor's defined message protocol, and the compiler will help with catching mistakes early.

The message protocol becomes very explicit and can also describe interactions by passing typed `ActorRef`s in the messages, for example describing what response message you can expect. It might at first be seen as boilerplate or extra work to have to define message class hierarchies or convert messages from one protocol to
another in interactions between actors. In the end it gives all the benefits that we are used to from strongly typed programs.

One benefit is catching mistakes early when writing the program, but the real benefit is when later trying to understand what the system does. Understanding interactions between actors. When revisiting old code, for example investigating a bug, or when trying to navigate and understand code written by someone else. Refactoring in a safe way also becomes much easier.

Note that the new Actor APIs include all Akka modules related to actors, such as 
[Persistence](https://doc.akka.io/docs/akka/current/typed/persistence.html) and 
[Cluster Sharding](https://doc.akka.io/docs/akka/current/typed/cluster-sharding.html).
We have improved the usability experience of all such modules. Trying to make them more guided for the most common usage. The flexibility of doing things outside the typical usage still exists but is not the first thing you are exposed to.

Typed and untyped actors can [coexist within the same application](https://doc.akka.io/docs/akka/current/typed/coexisting.html), within the same `ActorSystem`. Messages can be sent between both types of actors, they can watch each other and even spawn child actors in both ways. There is no plan of deprecating and removing untyped Actors. An existing application doesn't have to change, but if you like it's possible to introduce Akka Typed for new functionality or migrate at your own pace.

A good starting point for learning Akka Typed is the [Getting Started Guide](https://doc.akka.io/docs/akka/current/typed/guide/index.html).
