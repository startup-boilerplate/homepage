import React from 'react';
import Head from '../Head';

export default class Index extends React.Component {

  render () {
    return (
      <html>
      <Head/>
      <body>
      <nav className="white" role="navigation">
  <div className="nav-wrapper container">
    <a id="logo-container" href="#" className="brand-logo">Logo</a>
    <ul className="right hide-on-med-and-down">
      <li><a href="#">Navbar Link</a></li>
    </ul>

    <ul id="nav-mobile" className="side-nav">
      <li><a href="#">Navbar Link</a></li>
    </ul>
    <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
  </div>
</nav>

<div id="index-banner" className="parallax-container">
  <div className="section no-pad-bot">
    <div className="container">

      <h1 className="header center teal-text text-lighten-2">Parallax Template</h1>
      <div className="row center">
        <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
      </div>
      <div className="row center">
        <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
      </div>


    </div>
  </div>
  <div className="parallax"><img src="background1.jpg" alt="Unsplashed background img 1"/></div>
</div>


<div className="container">
  <div className="section">

    <div className="row">
      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
          <h5 className="center">Speeds up development</h5>

          <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">group</i></h2>
          <h5 className="center">User Experience Focused</h5>

          <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
          <h5 className="center">Easy to work with</h5>

          <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
        </div>
      </div>
    </div>

  </div>
</div>


<div className="parallax-container valign-wrapper">
  <div className="section no-pad-bot">
    <div className="container">
      <div className="row center">
        <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
      </div>
    </div>
  </div>
  <div className="parallax"><img src="background2.jpg" alt="Unsplashed background img 2"/></div>
</div>

<div className="container">
  <div className="section">

    <div className="row">
      <div className="col s12 center">
        <h3><i className="mdi-content-send brown-text"></i></h3>
        <h4>Contact Us</h4>
        <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
      </div>
    </div>

  </div>
</div>


<div className="parallax-container valign-wrapper">
  <div className="section no-pad-bot">
    <div className="container">
      <div className="row center">
        <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
      </div>
    </div>
  </div>
  <div className="parallax"><img src="background3.jpg" alt="Unsplashed background img 3"/></div>
</div>

<footer className="page-footer teal">
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

  </div>
</footer>
        <script src="/client.js"></script>
      </body>
      </html>

    )
  }

}
