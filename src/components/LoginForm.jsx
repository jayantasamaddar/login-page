import React from 'react';
import { useState, useEffect } from 'react';

export default function LoginForm({ metadata }) {
  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  /* Passing Data from Child to Parent (CallForm) */

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      metadata({ errors: formErrors, submit: isSubmit });
      console.log(formValues);
    }
  }, [metadata, formErrors, isSubmit, formValues]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = values => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (regex.test(values.password.length < 4)) {
      errors.password = 'Password must be more than 4 characters!';
    } else if (regex.test(values.password.length < 15)) {
      errors.password = 'Password cannot exceed more than 15 characters!';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>{formErrors.email}</p>
        <input
          type="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p>{formErrors.password}</p>
        <input
          type="password"
          placeholder="Password"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
