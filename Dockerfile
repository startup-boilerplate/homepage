FROM ubuntu:14.04

MAINTAINER Seva Dolgpolov

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get install -y nodejs

RUN apt-get install -y libfreetype6-dev libfontconfig1-dev

VOLUME ["/var/www/public"]

WORKDIR /var/www

CMD npm install && npm run build
