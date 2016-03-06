import React from 'react';
import links from '../links.js';
import NavigationMenu from '../component/navigation-menu.jsx';


class Nav extends React.Component {

  static propTypes = {
    pageLink: React.PropTypes.string,
  };

  render() {
    return (
   <nav className="transparent black-text" role="navigation">
    <div className="nav-wrapper container">
      <a id="logo-container" href="/" className="brand-logo">Startup<b>Boilerplate</b></a>
      <NavigationMenu pageLink={this.props.pageLink}
        className="right hide-on-med-and-down"
        links={links}
      />
    <div id="naviagation-menu"></div>
    </div>
  </nav>);
  }

}

export default Nav;
