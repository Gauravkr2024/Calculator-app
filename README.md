# Calculator-app
Steps to build Docker image.
Build the Docker image with below command.
"docker build -t calculator-app"
Then tag the image with below command.
"docker tag calculator-app yourdockerhub-username/calculator-app:latest
Then Push the image to your dockerhub account by below command.
"docker push yourdockerhub-username/calculator-app:latest"
Note: Before pushing this image to your dockerhub account make sure to authenticate your dockerhub account by below command.
" docker login"

Steps to access the image while deploying from kubernetes.
copy config.json file from docker container which has been created after docker login command and create it in kubernetes cluster.
Now create a kubernetes secret for your dockerhub credentials by which kubernetes can authenticate to pull the imageby below command.
" kubectl create secret generic docker-hub-secret \
    --from-file=.dockerconfigjson=/path/to/config.json \
    --type=kubernetes.io/dockerconfigjson"

Now mention secret name as a imagepullsecret in specification section.
