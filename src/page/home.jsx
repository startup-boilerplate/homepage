import React from 'react';
import Nav from '../component/nav.jsx';

class Home extends React.Component {

  render() {
    return (
<html lang="en">
<head>
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
  <title>Startup Boilerplate Template</title>
  <link href="/client.css" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>
<body>
  <a href="https://github.com/startup-boilerplate/homepage"><img style={{position: "absolute", top: 0, right: 0, border: 0, }} src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"/></a>
  <Nav />
  <div className="section no-pad-bot" id="index-banner">
    <div className="container">
      <br /><br />
      <h1 className="header center orange-text">Starter Template</h1>
      <div className="row center">
        <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
      </div>
      <div className="row center">
        <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
      </div>
      <br />
      <br />

    </div>
  </div>


  <div className="container">
    <div className="section">

      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="mdi-image-flash-on"></i></h2>
            <h5 className="center">Speeds up development</h5>

            <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="mdi-social-group"></i></h2>
            <h5 className="center">User Experience Focused</h5>

            <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="mdi-action-settings"></i></h2>
            <h5 className="center">Easy to work with</h5>

            <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
          </div>
        </div>
      </div>

    </div>
    <br /><br />

    <div className="section">

    </div>
  </div>

  <footer className="page-footer orange">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Company Bio</h5>
          <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Settings</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Connect</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
      </div>
    </div>
  </footer>

  <script src="/client.js"></script>
  </body>
</html>
);
  }
}

export default Home;
