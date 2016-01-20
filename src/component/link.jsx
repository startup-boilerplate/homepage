import React from 'react';

class Link extends React.Component {

  static propTypes = {
    href: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  }

  render() {
    const { href, name } = this.props;
    return (<a href={href}>{ name }</a>);
  }

}

export default Link;
