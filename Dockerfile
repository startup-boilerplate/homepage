FROM ubuntu:14.04

MAINTAINER Seva Dolgpolov

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get install -y nodejs

// PhantomJS dependencies
RUN apt-get install -y libfreetype6-dev libfontconfig1-dev

WORKDIR /var/www
