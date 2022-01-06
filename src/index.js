import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Work from './components/Work';
import Skills from './components/Skills'
import style from './style.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
