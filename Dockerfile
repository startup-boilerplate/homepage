FROM ubuntu:14.04

MAINTAINER Seva Dolgpolov

ENV NVM_VER 0.30.2
ENV NODEJS_VER 4.3.0
ENV USER root
ENV USER_DIR /$USER
ENV NVM_DIR $USER_DIR/.nvm
ENV APP_DIR /var/www

RUN apt-get update
RUN apt-get install -y curl git python build-essential libfreetype6-dev libfontconfig1-dev

RUN  curl https://raw.githubusercontent.com/creationix/nvm/v$NVM_VER/install.sh | bash 
RUN . $USER_DIR/.nvm/nvm.sh && nvm install $NODEJS_VER && nvm alias default $NODEJS_VER
ENV PATH=$USER_DIR/.nvm/versions/node/v$NODEJS_VER/bin:$PATH
WORKDIR $APP_DIR

ONBUILD ADD . $APP_DIR
VOLUME $APP_DIR/public

