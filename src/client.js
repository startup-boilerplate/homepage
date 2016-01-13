"use strict";

import React from 'react';
import {render} from 'react-dom';
import NavigationMenu from './component/navigation-menu.jsx';
import NavigationMenuButton from './component/navigation-menu-button.jsx';
import links from './links.js'

render(<NavigationMenuButton links={links} id="nav-mobile" className="side-nav"/>, document.getElementById('naviagation-menu'))
