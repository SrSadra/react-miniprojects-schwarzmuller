import { useRef, useState } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [emailValid , setEmailValid] = useState(true);

  function onSubmitData(event){
    event.preventDefault();
    console.log(email.current.value); // to get the exact email

    const emailIsValid = email.current.value.includes("X");
    console.log(emailIsValid);

    if (!emailIsValid){
      setEmailValid(false);

      return; // preventing sending http req
    }

    setEmailValid(true);
    
  }

  return (
    <form onSubmit={onSubmitData}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" ref={email} />
          {!emailValid && <p>Email is not valid</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label> {/* htmlfor is like className built in jsx syntax */}
          <input id="password" type="password" name="password" ref={password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
