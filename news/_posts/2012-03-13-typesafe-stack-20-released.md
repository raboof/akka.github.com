---
layout: news
title: Typesafe Stack 2.0 Released
author: Jonas Bonér
---

Following our release of Akka 2.0 last week, we are now releasing Typesafe Stack 2.0 targeting both Java and Scala developers. Read more about it in the [official announcement](http://blog.typesafe.com/introducing-typesafe-stack-20).

In short the Typesafe Stack is a modern software platform that makes it easy for developers to build scalable software applications in Java and Scala. It combines the Scala programming language, Akka middleware, Play web framework, and robust developer tools in a simple package that integrates seamlessly with existing Java infrastructure.

This is interesting to Akka hakkers in several ways: 

## Typesafe Console

The Typesafe Console is now available as part of the commercial [Typesafe Subscription](http://typesafe.com/products/typesafe-subscription).

The Typesafe Console is a tailor-made tracing and monitoring solution for event-driven Akka actor based systems. The Typesafe Console captures the events that comprise your application’s asynchronous processing, links those events into meaningful trace flows across actors and remote nodes, and makes this information actionable to developers and operations staff through a rich web-based user interface as well as through REST an JMX interfaces.

You can find a live demo of the [running console here](http://console-demo.typesafe.com/).
For more info read the [introductory article](http://blog.typesafe.com/introducing-typesafe-console) or the [online documentation](http://resources.typesafe.com/docs/console).


## Play 2.0 Web Framework

The Typesafe Stack, featuring Akka 2.0, now also contains the amazing [Play! 2.0 Web Framework](http://www.playframework.org/) (also released today). 

Play 2.0 is using Akka 2.0 for all its event-handling and asynchronous processing making Play 2.0 very scalable and fault-tolerant. Play is the best alternative today for building modern real-time web applications.

If you don't need a full-blown web framework but need to work with HTTP we have the [Play Mini](http://github.com/typesafehub/play2-mini) library which provides a thin DSL on top of Play 2.0 for working with HTTP. Works excellent [together with Akka](http://letitcrash.com/post/17888436664/a-sample-application-showcasing-play-mini-and-akka).

Read more about the highlights in [this new blog post](http://blog.typesafe.com/introducing-play-20) or dive right into the [Play 2.0 documentation](http://www.playframework.org/documentation/2.0/Home). 

## Getting Started Templates
The Typesafe Stack makes it very easy to get started with Akka 2.0 or Play 2.0 through the different (giter8) template projects available. Just check out the one you like and get down to business. 

You can also work through one of the getting started tutorials. More info can be found in the [Getting Started Guide](http://typesafe.com/resources/getting-started/typesafe-stack/index.html)

## Download

Download it from the [Typesafe download page](http://typesafe.com/stack/download).

**Happy hAkking!**
