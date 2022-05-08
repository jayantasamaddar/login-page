import './App.css';
import './index.js'
import ChangeColor from './components/ChangeColor';
import SocialButtons from './components/SocialButtons';
import InputboxLogin from './components/InputboxLogin';
import LogoAndTitle from './components/LogoAndTitle';
import LoginButtons from './components/LoginButtons';
import CallForm from './components/CallForm';
import React,{Component, useState} from 'react';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';

//import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
//import successPage from './successPage';

class App extends Component{
	render(){

		return(<div>
				<CallForm/>
				</div>

		)
	}
}

export default App;
