import React from "react";
import LogoAndTitle from "./LogoAndTitle";
import InputboxLogin from "./InputboxLogin";
import LoginButtons from "./LoginButtons";
import SocialButtons from "./SocialButtons";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import { useInputLogin } from './path';



function CallForm() {
    const inputLoginInfo = useInputLogin();
    return (<div>
        <div class="containerr">
       { Object.keys(formErrors).length === 0 && isSubmit ? (<div className="UI message success"> Signed in successfully</div>): (<pre>{JSON.stringify(toHaveFormValues,undefined,2)}</pre>) }
           
            <div class="container" id="container">
                 <div class="form-container sign-in-container">
                    <form action="#" onSubmit={handleSubmit}>
                        <LogoAndTitle/>
					    <InputboxLogin/>
					    <LoginButtons/>
					    <SocialButtons/>
                    </form>
                </div>
            </div>
        </div>
    </div>)

}

export default CallForm;