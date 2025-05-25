import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import {authActions} from "../store/authSlice"

const Auth = () => {
  const dispatch  = useDispatch();


  const onSubmitForm = (e) => {
    e.preventDefault();

    dispatch(authActions.signIn()) //remember to use it as function
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitForm}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
