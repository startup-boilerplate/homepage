FROM ubuntu:14.04

MAINTAINER Seva Dolgpolov

ENV NVM_VER 0.30.2
ENV NODEJS_VER 4.3.0
ENV USER dev
ENV USER_DIR /home/$USER
ENV NVM_DIR $USER_DIR/.nvm
ENV APP_DIR /var/www

RUN apt-get update
RUN apt-get install -y curl git python build-essential
RUN useradd --home $USER_DIR -m -U -s /bin/bash $USER

RUN echo 'Defaults !requiretty' >> /etc/sudoers; \
    echo $USER ' ALL= NOPASSWD: /usr/sbin/dpkg-reconfigure -f noninteractive tzdata, /usr/bin/tee /etc/timezone, /bin/chown -R ' $USER\:$USER $APP_DIR >> /etc/sudoers;

#run all of the following commands as user node from now on
USER $USER

RUN curl https://raw.githubusercontent.com/creationix/nvm/v$NVM_VER/install.sh | bash 
RUN . ~/.nvm/nvm.sh && nvm install $NODEJS_VER && nvm alias default $NODEJS_VER

VOLUME ["/var/www/public"]

WORKDIR $APP_DIR

CMD npm install && npm run build
