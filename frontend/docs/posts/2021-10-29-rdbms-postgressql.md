---
title: rdbms-postgressql
date: 2021-10-29
tags:
  - anime
featuredimg: https://picsum.photos/800/500.webp
author: avimehenwal
summary: rdbms-postgressql
---

# RDBMS

- DB-Normalization
  - 1NF, 2NF, 3NF
- ACID Properties
- CAP Theorem

## POSTGRES-SQL

## Relationships

### Many-2-Many Relationbship

- is maintained by an additional **BRIDGE TABLE**,
- django created it on its own, using the fields name which has many to many r/s
  - Manually control the new BRIDGE TABLE fields using `through` argument
  - [Extra field on m-2-m relationship](https://docs.djangoproject.com/en/3.2/topics/db/models/#extra-fields-on-many-to-many-relationships)

## Polymorphic Association

## Polymorphic Joins

Join table per relationship type is an improvement over polymorphic joins, but at the cost of an extra table per relationship. In addition, it doesn't do anything that either of the belongs-to models can't do better.

## DB Table Inheritance

## Problems with RDBMS

- Missing join Resources, wrong/incorrect key when referential integrity is NOT enforced by Fk
  - A resource can be missing an acl and an acl can point to a missing resource.

<Footer />
