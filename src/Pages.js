import React from 'react';

export default class Pages extends React.Component {
  render () {
    const path = this.props.location.pathname==="/"?"":this.props.location.pathname
    const Html = require('.' + path + '/Index.html').default

    return (<Html/>)
  }
}
