---
layout: post
title: Alpakka Kafka 1.0 Released
author: Martynas Mickevičius
short: We are happy to announce the release of Alpakka Kafka 1.0
category: news
tags: [releases]
---

Dear hakkers,

We are happy to announce the general availability of Alpakka Kafka 1.0. The artifacts are the same as the last release candidate 1.0-RC2.

Highlights of the release since 0.22 are:

* Kafka Client has been upgraded to 2.1.0
* No more `WakeupException`
* Alpakka Kafka consumers don’t fail for non-responding Kafka brokers anymore
* New `Committer.sink` and `Committer.flow` for standardised committing
* Comitting with metadata
* Java APIs for all settings classes
* Alpakka Kafka testkit

Some of these changes have been developed or initiated by the community. A big thank you for everyone involved!

For detailed changes, credits, and more on the Alpakka Kafka connector history, please see the [release notes](https://doc.akka.io/docs/alpakka-kafka/current/release-notes/1.0.html) in the Alpakka Kafka connector documentation.

Happy hakking!

– The Alpakka Team
