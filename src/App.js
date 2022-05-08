import './App.css';
import './index.js';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import { LoginPage, Dashboard } from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }
}

export default App;
