import './App.css';
import './index.js'
import socialButton from './components/socialButtons';
import inputboxLogin from './components/inputboxLogin';
import logoAndTitle from './components/logoAndTitle';
import loginButtons from './components/loginButtons';

function App() {
  return (

    <div class="containerr">

	<div class="container" id="container">
	
	<div class="form-container sign-in-container">
		<form action="#">

			<logoAndTitle/>
		<img src="https://i.imgur.com/co3jxYH.png" alt="Trulli" width="270" height="270"></img>
			
			<h1>Welcome To Sky Source</h1>
			
			<h2>Log in</h2>
			<inputboxLogin/>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<loginButtons/>
			<a href="#">Forgot your password or username?</a>
			<button id="btn">Sign In</button>
			<br></br>
			<socialButton/>
 			Or Sign in as
		
<div class="entry-social">
<div class="fb">
<a href="Your_Facebok_Page" target="_blank">Facebook</a>
</div>
<div class="twitter">
<a href="Your_twitter_Profile" target="_blank">Twitter</a>
</div>
<div class="gplus">
<a href="Your_Googleplus_Follow" target="_blank">Google+</a>
</div>
<div class="linkedin">
<a href="Your_Linkedin_Profile" target="_blank">Linkedin</a>
</div>
<div class="pinterest">
<a href="You_Pinterest_Page" target="_blank">Pinterest</a>
</div>
<div class="delicious">
<a href="Your_Delicious_Profile" target="_blank">Delicious</a>
</div>
</div>
		
		</form>
	</div>

</div>


</div>
 
  );



  

  
 
}



//colorChange();


export default App;
