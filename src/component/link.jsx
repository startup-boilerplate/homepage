import React from 'react';

class Link extends React.Component {

  render () {
    let { href, name } = this.props;
    return (<a href={href}>{name}</a>)
  }

}

export default Link;
