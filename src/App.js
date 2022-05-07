import './App.css';
import './index.js'

import ChangeColor from './components/ChangeColor';
import SocialButtons from './components/SocialButtons';
import InputboxLogin from './components/InputboxLogin';
import LogoAndTitle from './components/LogoAndTitle';
import LoginButtons from './components/LoginButtons';
import React,{Component, useState} from 'react';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';

//import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
//import successPage from './successPage';


class App extends Component{
	render(){

		return(
		<div class="containerr">
			
			<div class="container" id="container">
				<div class="form-container sign-in-container">
					<form action="#" >
					<LogoAndTitle/>
					<InputboxLogin/>
					<LoginButtons/>
					<SocialButtons/>
					</form>
				</div>
			</div>
		</div>
		)
	}
}


/** 

function App() {
  return (

    <div class="containerr">

	<div class="container" id="container">
	
	<div class="form-container sign-in-container">
		<form action="#">
			<div>
			<logoAndTitle/>
			</div>
			<img src="https://i.imgur.com/co3jxYH.png" alt="Trulli" width="270" height="270"></img>
			<h1></h1>
			<h1>Welcome To Sky Source</h1>
			
			<h2>Log in</h2>
			<inputboxLogin/>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<loginButtons/>
			<a href="#">Forgot your password or email ?</a>
			<button id="btn">Sign In</button>
			<br></br>
			<socialButton/>
 			Or Sign in as
		
<div class="entry-social">
<div class="fb">
<a href="Your_Facebok_Page" target="_blank">Facebook</a>
</div>
<div class="gplus">
<a href="Your_Googleplus_Follow" target="_blank">Google+</a>
</div>
<div class="linkedin">
<a href="Your_Linkedin_Profile" target="_blank">Linkedin</a>
</div>

</div>
		
		
		
</form>
</div>

</div>


</div>
 
  );



  

  
 
}

*/




export default App;
