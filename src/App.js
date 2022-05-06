
import './App.css';


function App() {
  return (

    <div class="containerr">

<div class="container" id="container">
	
	<div class="form-container sign-in-container">
		<form action="#">
		<img src="https://i.imgur.com/co3jxYH.png" alt="Trulli" width="270" height="270"></img>
			
			<h1>Welcome To Sky Source</h1>
			<h2>Log in</h2>
			
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button id="btn">Sign In</button>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
		</form>
	</div>

</div>


</div>
 
  );



  

  
 
}
const btn = document.getElementById('btn');
let counter = 0;
const colors = ['#17b6a0', '#e7c905'];
btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[counter];
  counter = counter >= colors.length - 1 ? 0 : counter + 1;
});

export default App;
