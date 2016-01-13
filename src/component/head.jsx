import React from 'react';

class Head extends React.Component {
  render () {
    return (<head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
      <title>{this.props.title}</title>
      <link href="/client.css" type="text/css" rel="stylesheet" media="screen,projection"/>
    </head>
  )
}
}


export default Head;
