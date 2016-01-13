"use strict";

import React from 'react';
import links from '../links.js';
import Link from './link.jsx';
import NavigationMenu from '../component/navigation-menu.jsx';


class Nav extends React.Component {

  render () {
  return (
   <nav className="light-blue lighten-1" role="navigation">
    <div className="nav-wrapper container"><a id="logo-container" href="/" className="brand-logo">SartupBoilerplate</a>
      <NavigationMenu pageLink={this.props.pageLink} className="right hide-on-med-and-down" links={links} />
    <div id="naviagation-menu"></div>
    </div>
  </nav>)
  }

}

export default Nav;
