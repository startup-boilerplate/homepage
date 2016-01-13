"use strict";

import React from 'react'
import {Router, Route, IndexRoute } from 'react-router'
import Home from './page/home.jsx';
import About from './page/about.jsx';



module.exports = [
  { path: '/',
    component: Home
  },
  { path: '/about',
    component: About
  }
]
