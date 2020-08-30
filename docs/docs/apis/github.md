---
title: Github API v3
tags:
- github
- api
- rest
---

# Github API v3

<TagLinks />

Use [jq](https://stedolan.github.io/jq/tutorial/) to pretty print json

```bash
ln --symbolic ~/mySoftwares/jq-linux64 jq
```

```bash
curl "https://api.github.com/repos/vuejs/vue/commits?per_page=5"

curl "https://api.github.com/repos/vuejs/vue/commits?per_page=5" \
  | jq '.[0] | {message: .commit.message, name: .commit.committer.name}'

curl "https://api.github.com/repos/vuejs/vue/issues?per_page=10" \
  | jq '.[] | {title}'
```

<Footer />
