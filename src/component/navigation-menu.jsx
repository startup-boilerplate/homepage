"use strict";
import React from 'react';
import ReactDom from 'react-dom';
import Link from '../component/link.jsx';


class NavigationMenu extends React.Component {

  render () {
   
   console.log(this.props)
    const links =  this.props.links.map(function(link, i){
	let className = (this.props.pageLink === link.href)?"active":""  
          return <li key={i} className={className}><Link {...link}/></li>;
      }.bind(this))

    const id = (this.props.id)?this.props.id:"";
    const className = this.props.className;

    return(
          <ul ref="{this.props.ref}" id={id} className={className}>
          {links}
          </ul>)
  }

}

export default NavigationMenu;
