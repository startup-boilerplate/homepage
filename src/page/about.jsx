import React from 'react';
import AboutContent from './md/about.md';
import Head from '../component/head.jsx';
import Body from '../component/body.jsx';

class About extends React.Component {
  render() {
    const head = AboutContent.meta.head;
    return (<html>
    <Head {...head}/>
    <Body content={ AboutContent.html } />
    </html>);
  }
}

export default About;
