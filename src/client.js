import React from 'react';
import { render } from 'react-dom';
import NavigationMenuButton from './component/navigation-menu-button.jsx';
import links from './links.js';
import tracker from './tracker.js';

render(<NavigationMenuButton links={ links } id="nav-mobile" className="side-nav"/>,
       document.getElementById('naviagation-menu'));
