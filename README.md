# WebDemo

- [x] sign up page done
- [ ] optimize sign up error handling
- [ ] might use hook in signup (217. Using the useRequest Hook)
- [ ] add a tip for how to create a jwt seacrt jwt webtoken

install docker

install kubernetes

install minikube(linux)
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

install skaffold
for linux: curl -Lo skaffold https://storage.googleapis.com/skaffold/builds/latest/skaffold-linux-amd64 && \
sudo install skaffold /usr/local/bin/

install ingress-nginx
edit host file
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=syswift
