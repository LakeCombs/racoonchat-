import { Formik, Form } from 'formik';
import { useState } from 'react';
import { validationSchema, defaultValues } from './FormikSignupConfig';
import { FormField } from './FormField';
import { useHistory } from 'react-router';

export const Signup = () => {
  const hist = useHistory();
  const [serverError, setServerError] = useState('');

  const Signup = ({ email, userName, password }, { setSubmitting }) => {
    console.log('signing up: ', email, userName, password);
  };

  return (
    <div className="auth-form">
      <h1>Signup</h1>

      <Formik
        onSubmit={() => Signup()}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField name="userName" label="user name" />
            <FormField name="email" label="Email" type="email" />
            <FormField name="password" label="Password" type="password" />
            <FormField
              name="verifyPassword"
              label="verify Passowrd"
              type="password"
            />
            <div className="auth-link-container">
              Already have an account
              <span className="auth-link" onClick={() => hist.push('/login')}>
                Log In
              </span>
            </div>

            <button disabled={isSubmitting || !isValid} type="submit">
              Sign up
            </button>
          </Form>
        )}
      </Formik>
      {!!serverError && <div className="error">{serverError}</div>}
    </div>
  );
};
