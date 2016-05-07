import React from 'react';


const GitHubFork = () => (<a href="https://github.com/startup-boilerplate/homepage">
           <img style={{position: "absolute", top: 0, right: 0, border: 0, }}
                src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67"
                alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"/>
          </a>)


export default class Index extends React.Component {

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
  <GitHubFork />

  <div className="section no-pad-bot" id="index-banner">
    <div className="container">
      <h1 className="header center black-text"><span className="thin">Bootstrap your</span> <span className="bold">Startup</span><span className="thin"> infrastructure in the fastest possible way</span></h1>
    </div>
  </div>


  <div className="container">
    <div className="section">

      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center cyan-text"><i className="mdi-hardware-memory"></i></h2>
            <h5 className="center">Component based</h5>
            <p className="light">We entend to ship the whole range of components, that are necessary, to run and improve your startup</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center cyan-text"><i className="mdi-image-style"></i></h2>
            <h5 className="center">Material Design</h5>
            <p className="light">We provide google's Material Design, untilzed by materializecss framework.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center cyan-text"><i className="mdi-action-lock-open"></i></h2>
            <h5 className="center">Open Source</h5>
            <p className="light">All essential building blocks of provided infrastructure blocks are open sourced</p>
          </div>
        </div>
      </div>

    </div>
    <br /><br />

    <div className="section">

    </div>
  </div>


  <script src="/client.js"></script>
  </body>
</html>
);
  }
}
