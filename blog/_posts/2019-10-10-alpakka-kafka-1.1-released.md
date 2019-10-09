---
layout: post
title: Alpakka Kafka 1.1 Released
author: Enno Runne
short: We are happy to announce the release of Alpakka Kafka 1.1
category: news
tags: [releases]
---

Dear hakkers,

We are happy to announce the general availability of Alpakka Kafka 1.1. The artifacts are the same as the last release candidate 1.1.0-RC2.

Alpakka Kafka 1.1.0 changes the internals of how offset commits are sent to the Kafka broker. The new implementation is very beneficial for high-throughput consumers as committing is now connected to the regular polling of the Kafka consumer, which reduces pressure on Kafka.

It adds a new source for advanced usage: `committablePartitionedManualOffsetSource` which may be used when offsets are stored external to Kafka, but tools for consumer lag which rely on offsets being committed to Kafka are in use.

Some of these changes have been developed or initiated by the community. A big thank you to everyone involved!

For detailed changes, please see the [release notes](https://doc.akka.io/docs/alpakka-kafka/current/release-notes/1.1.x.html) in the Alpakka Kafka documentation.

Happy hakking!

– The Alpakka Team
