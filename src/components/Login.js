import { Formik, Form } from 'formik';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { FormField } from './FormField';
import app from './firebase';
import { defaultValues, validationSchema } from './FormikLoginConfig';

export const Login = () => {
  const [serverError, setServerError] = useState('');
  const hist = useHistory();

  const login = ({ email, password }, { setSubmitting }) => {
    app.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (!res.user) {
          setServerError(
            "we're having trouble logging you in, please try again",
          );
        }
      })
      .catch((err) => {
        if (err.code === 'auth/wrong-password') {
          setServerError('invalid credentials');
        } else if (err.code === 'auth/user-not-found') {
          setServerError('no accound for this email');
        } else {
          setServerError('something went wrong :( ');
        }
      });
  };
  return (
    <div className="auth-form">
      <h1>Login</h1>
      <Formik
        onSubmit={() => Login}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField type="email" name="email" label="email" />
            <FormField type="password" name="password" label="password" />
            <div className="auth-link-container">
              don't have an account?{''}
              <span className="auth-link" onClick={() => hist.push('/signup')}>
                Sign Up!
              </span>
            </div>
            <button type="submit" disabled={!isValid || isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
      {!!serverError && <div className="error">{serverError}</div>}
    </div>
  );
};
