[![Build Status](http://ci.startupboilerplate.com/api/badges/startup-boilerplate/homepage/status.svg)](http://ci.startupboilerplate.com/startup-boilerplate/homepage)

# Material Design React based demo homepage.

This project is a proof of concept of static React application templated by Googles Material Design and running on Docker.

### How to start

Before you will be able to run this project locally, you need to install [**Docker-Machine**](https://docs.docker.com/machine/install-machine/) together with:
   - docker
   - docker-compose

You also have to provide a vm for your docker-host and apply it's environment variables. It can look smth. like this.

```
// create a vm
$ docker-machine create --driver virtualbox default

//apply env variables
$ eval $(docker-machine env default)
```

After you installed a docker stack and checked the current repo, go to repository root and run:

```
$ docker-compose up -d
```
it will take sometime. Ok, what it does, it builds 2 container:
- the first is a nodejs one, it takes repository code and builds html based on it and put in ```/var/www/public```
- the second is a web-server(nginx). it simply mounts ```/var/www/public``` folder from the first container and serve it to the outside world.

Of course you can also just simply run ```npm install``` and use webpack-dev-server locally, but it not the idea behind that demo, which is to provide isolated environment, that is as identical to production as possible.

To get it in browser, open an IP of your *default* VM, you can check it by ```docker-machine ip default```.

### React part

The general idea is solved with 2 npm packages:
 - [static-html-webpack-plugin](https://www.npmjs.com/package/static-html-webpack-plugin) it takes *react-router* routes and creates an html based on it.
 - [yaml-markdown-loader](https://www.npmjs.com/package/yaml-markdown-loader), it provides kinda Jekyll format for creating pages. You provide all meta, that you need in a header and content in a body. And all that in the same .md file.

and builds a html tree along with all .js, .css, ... like this:
```
.
|--- /public
|    |--- /index.html
|    |--- /about
|    |    |--- /index.html
|    |--- client.js
|    |--- client.css
|    |--- ...
```

### Development mode

After you bootstrapped startboilerplate setup by ```docker-compose up -d```
you have to have an image **homepage_html_onbuild** build in your VM, that is the one the you need for working. All you need now, is just to map your application code to ```/var/www``` on image side and start working.
here is an example command:
```
$ docker run --rm -ti -p 8080:8080 -v $PWD:/var/www homepage_html_onbuild /bin/bash
```
and then start webpack-dev-server
 ```
$ npm run dev-server
```
to get the dev page to see, open <default_vm_ip>:8080 in your browser.
 
### TODO

  demo is an absolutely alpha.
  - it needs test
  - it needs environment awareness
  - and many many more... you are really welcome to contribute ;)
