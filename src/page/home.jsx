import React from 'react';
import Nav from '../component/nav.jsx';
import GitHub from '../component/github-forkme.jsx';

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
  <GitHub />
  <Nav />
  <div className="section no-pad-bot" id="index-banner">
    <div className="container">
      <h1 className="header center black-text"><span className="thin">Bootstrap your</span> <span className="bold">Startup</span><span className="thin"> infrastructure in a fastes possible way</span></h1>
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

export default Home;
