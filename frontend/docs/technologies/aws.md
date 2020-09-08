---
title: AWS
tags:
- aws
- cloud
---

# AWS

<TagLinks />

CredentialsError: Missing credentials in config
:   make sure Credentials are working properly. Aws client accepts profile name

    ```
    aws sts get-caller-identity
    aws configure list
    aws configure --profile cndx-dev
    ```


<Footer />
