"use strict";

import React from 'react';
import AboutContent from './md/about.md'
import Head from '../component/head.jsx'
import Body from '../component/body.jsx'

const About = React.createClass({
  render() {
     
   let head = AboutContent.meta.head; 
    return (<html>
    <Head {...head}/>
    <Body content={AboutContent.html} />
    </html>)
  }
})

export default About;
