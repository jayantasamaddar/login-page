import './App.css';
import './index.js';
import CallForm from './components/CallForm';
import React, { Component, useState } from 'react';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';

//import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
//import successPage from './successPage';

class App extends Component {
  render() {
    return (
      <div>
        <CallForm />
      </div>
    );
  }
}

export default App;
