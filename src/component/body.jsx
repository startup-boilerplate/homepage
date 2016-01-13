import React from 'react';
import Nav from './nav.jsx';

class Body extends React.Component {

  rawMarkup () {
    return { __html: this.props.content };
  }

  render () {
    return (
     <body>
      <Nav pageLink="/about" />
      <div className="container">
          <div className="row">
             <div dangerouslySetInnerHTML={this.rawMarkup()}/>
          </div>
      </div>
      <script src="/client.js"></script>
    </body>)
  }
}


export default Body;
