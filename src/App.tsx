import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from './store/rootStore';

import HomePage from './components/HomePage';







export default function App() {
    return <HomePage />;
  
}

