import { useState } from 'react';
import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  // const [isLogin, setIsLogin] = useState(true);
  const [searchParams , setSearchParams] = useSearchParams();
  const data = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  // function switchAuthHandler() {
  //   setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  // }

  const isLogin = searchParams.get("mode") === "login";

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.error && (
          <ul>
          {Object.values(data.error).map((err) => (
          <li key={err}>{err}</li>
          ))
        }</ul>
        )}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin? "signup" : "login"}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting? "Submitting..." : "Save"}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
