import { useState } from 'react';
import LogoAndTitle from './LogoAndTitle';
import LoginForm from './LoginForm';
import LoginButtons from './LoginButtons';
import SocialButtons from './socialButtons';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';

export default function CallForm() {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const fromLoginForm = ({ errors, submit }) => {
    setFormErrors(errors);
    setIsSubmit(submit);
  };

  return (
    <div>
      <div class="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="UI message success"> Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(toHaveFormValues, undefined, 2)}</pre>
        )}

        <div class="container" id="container">
          <div class="form-container sign-in-container">
            <LogoAndTitle />
            <LoginForm metadata={fromLoginForm} />
            <LoginButtons />
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
