export const validateForm = values => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+.[^\s@]{2,}$/i;
  if (!values.email) {
    errors.email = 'Email is required!';
  } else if (!regex.test(values.email)) {
    errors.email = 'This is not a valid email format!';
  }
  if (!values.password) {
    errors.password = 'Password is required!';
  } else if (values.password.length < 4) {
    errors.password = 'Password must be more than 4 characters!';
  } else if (values.password.length > 15) {
    errors.password = 'Password cannot exceed more than 15 characters!';
  }

  return errors;
};
