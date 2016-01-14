FROM ubuntu:14.04

MAINTAINER Seva Dolgopolov

RUN apt-get update
RUN apt-get install -y nginx

ADD homepage /etc/nginx/sites-enabled/default

CMD ["nginx", "-g", "daemon off;"]
