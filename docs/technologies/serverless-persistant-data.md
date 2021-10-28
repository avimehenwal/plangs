---
title: Serverless Persistence Data
tags:
  - serverless
  - persistence
  - database
---

# Serverless Persistence Data

<TagLinks />

- How to choose DB for your serverless application?
- Should you run RDBMS inside docker containers?
  - good for development environment
  - bad for production environment

> You should not run stateful applications in orchestration tools which are built for stateless apps.

Databases are **critical services**. They take effort to operate, and even more effort to do so reliably. If you really need your data to stick around and be safe no matter what, you don’t want **unnecessary risks**.

- Can I run a DB on google cloud run serverless knative infrastructure?

  - First of all, the contract between the deployed container and Cloud Run is that the **container needs to run an HTTP server on port 8080**. That's not really the way MySQL works.

- [x] use terraform to provision cloud SQL DB service and instance
- [ ] GCP, cheapest DB `db-f1-micro` **8$/month**

<Footer />
