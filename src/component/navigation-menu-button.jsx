"use strict";
import React from 'react';
import ReactDom from 'react-dom';
import NavigationMenu from './navigation-menu.jsx'

class NavigationMenuButton extends React.Component {

  handleClick () {

    let navmobile = ReactDom.findDOMNode(this.refs.navmobile);

    navmobile.style.left = "0px";
    let div = document.createElement("div");
    div.id = "sidenav-overlay";

    div.addEventListener('click', function(){

      navmobile.style.left = "-250px";
      div.parentNode.removeChild(div);

    }.bind(this))

    ReactDom.findDOMNode(this).appendChild(div);
  }

  componentDidMount () {

    ReactDom.findDOMNode(this.refs.navmobile).style.left = "-250px";

  }

  render () {

    let boundClick = this.handleClick.bind(this);
    let pageLink = window.location.pathname;
    return(
          <span>
          <a href="#" ref="navigation_menu" onClick={boundClick} data-activates="nav-mobile" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
          <NavigationMenu ref="navmobile" id={this.props.id} className={this.props.className} links={this.props.links} pageLink={pageLink} />
          </span>
      )
  }
}

export default NavigationMenuButton;
