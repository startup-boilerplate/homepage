# Material Design React based demo homepage.

This project is a proof of concept of static React application and usage of principles of Googles Material Design, in realisation of materializecss.com guys.

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
- the second is a web-server(nginx). it simply mounts ```/var/www/public``` folder from the first container and serve it to the outside wolrd.

Of course you can also just simply run ```npm install``` and use webpack-dev-server locally, but it not the idea behind that demo, which is to provide isolated environment that is as identical to production as possible.


### React part

The general idea is solved with 2 npm packages:
 - [static-html-webpack-plugin](https://www.npmjs.com/package/static-html-webpack-plugin) it takes *react-router* routes and creates an html based on it.
 - [yaml-markdown-loader](https://www.npmjs.com/package/yaml-markdown-loader), it provides kinda Jekyll format for creating pages. You provide all meta that you need in a header, and content in a body of a .md file.

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


 ### TODO

  demo is an absolutely alpha.
  - it needs test
  - it needs environment awareness
  - and many many more... your really welcome to contribute ;)
