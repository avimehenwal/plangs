---
title: Kubernetes local cluster
tags:
  - kubernetes
  - k8
  - cluster
---

# Kubernetes Cluster

## Local K8 Cluster players

1. [Minikube](https://minikube.sigs.k8s.io/docs/start/)
2. [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) (k8 in docker)
   1. docker is running inside docker
3. k3s (pipelines to run integration tests) make sure everything works


## Minikube

setup a VM, as in real cluster
really fully featured

- Master Nodes and Worker Nodes have different responsibilities
- How do I create pods and services on k8 cluster?

How to maintain open source project?

Can have multiple clusters with different container runtimes (like docker, containerd, CRI-O)

- [Can run minikube in github actions CI](https://minikube.sigs.k8s.io/docs/tutorials/setup_minikube_in_github_actions/)
- Install minikube on a remote machine

```
minikube start --driver=ssh --ssh-ip-address=vm.example.com --force-systemd=true --cpus 6 --memory 8000 --profile=avi-cluster
minikube stop --schedule=5m
```

- can use minikube to build images without having to install docker at all

```
minikube image build -t 
```

Embrace the human parts of software

### How to run container in minikube

- We need to create a K8 **deployment** before we can run a container in cluster
- Expose the port to the outside world

```
kubectl create deployment hello-node --image=gcr.io/hello-node
kubectl get deployments

# enable communication via Service component
kubectl expose deployment hello-node --type=LoadBalancer --port=8080
kubectl expose deployment hello-node --type=NodePort --port=8080 --name=servie-name

kubectl get services

# autoscale deployments
kubectl autoscale deployment/nginx-deployment --min=10 --max=15 --cpu-percent=80

minikube service hello-node   # expose service to outside world
```

### Config

```
minikube start --container-runtime=docker
```

## Container Runtimes

Knows how to run and check the status of containers

- [ ] build and add images to minikube local registry

```
eval $(minikube docker-env)

minikube addons enable registry
docker build --tag $(minikube ip):5000/test-img .
docker push $(minikube ip):5000/test-img

minikube image build -t my_image .
```


```
minikube mount $HOME:/host
```

## API Throttling and rate limits

using nginx ingress `minikube addons enable ingress`

https://medium.com/titansoft-engineering/rate-limiting-for-your-kubernetes-applications-with-nginx-ingress-2e32721f7f57

nginx uses https://en.wikipedia.org/wiki/Leaky_bucket Algorithm

An Ingress may be configured to give

- [ ] Services externally-reachable URLs
- [ ] load balance traffic
- [ ] terminate SSL / TLS, and
- [ ] offer name-based virtual hosting.

### How to expose a Service ?

How external traffic enters K8 clusters

1. NodePort
2. LoadBalancer
3. Ingress Controller


#### API Management platform

for use in the API Economy.
[IBM API Connect](https://www.ibm.com/docs/en/api-connect/10.0.x?topic=api-connect-overview) enables users to create, assemble, manage, secure and socialize web application programming interfaces (APIs). 

## AWS SAM vs K8

container driven development and deployment with SAM

https://aws.amazon.com/blogs/compute/using-container-image-support-for-aws-lambda-with-aws-sam/


## Modern Serverless Development

- Kubernetes - can move deployment to any cloud provider like AWS, GCP, Azure, IMB cloud etc. cloud provider agnostic
- Containers Runtime Engine
- Lambda Functions with API Gateways

## EKS

- Managed Master Node (preinstalled)
  - Container runtine
  - K8 Master processes, APIs
- Worker Nodes -> EC2 instances, Node Groups
  - Application software

- [x] scale applications
- [ ] route and throttle traffic
- [ ] manage container lifecycle, restarting stale/dead containers
- [ ] high availability and six-9 SLAs

## KUBERNETES Components

- [etcd](https://etcd.io/) open source KV data-store, single source of truth, reliably and consistent.
  - built on top of RAFT Algorithm
- nodes: physical machine with CPU and memory and networking resources
- pods, logical abstraction of containers, so that you can change container technology
- deployments - run the containers inside pods, and replicas for stateless applications
- ingress, external service
- service, permanent IP address for communication
- COnfigMap - external configuration to your application, like database connection URL
- secret, like config maps but NOT in plain text (base64)
- Volumes, attach persistant data-storage to pods, could be local or remote
- StatefulSet, for database components replicas like postgresSQL

## Multi cluster Kubernetes

- K8 abstraction for Tenants = Namespace
- draw K8 clluster boundaries with your tenants

Software multitenancy is a software architecture in which a single instance of software runs on a server and serves multiple tenants. Systems designed in such manner are "shared" (rather than "dedicated" or "isolated"). A tenant is a group of users who share a common access with specific privileges to the software instance.

- s/w is shared between multiple consumes
- BUT consumers are unaware of each other.
- Eg; SaaS Appls, API consumers

Tenancy at multiple softwares levles, like

1. Infrastructure Level
2. Schema based Multitenancy model
3. Shared Schema Multitenancy model

Shared Multitenancy Services like

1. Computing, CPU, Memory
2. Networking
3. Storage

