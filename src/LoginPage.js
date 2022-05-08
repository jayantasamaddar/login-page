

import React from 'react';
import SocialButtons from './components/SocialButtons';
import InputboxLogin from './components/InputboxLogin';
import LogoAndTitle from './components/LogoAndTitle';
import LoginButtons from './components/LoginButtons';

function LoginPage() {
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
		</div>)
}

export default LoginPage;