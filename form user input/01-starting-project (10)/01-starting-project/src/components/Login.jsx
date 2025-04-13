import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password : ""
  })

  function onSubmitData(event){
    event.preventDefault();
  }

  function handleInputChange(identifier , event){
    setFormData((prev) => (
      {
        ...prev,
        [identifier] : event.target.value
      }
    ))
  }

  return (
    <form onSubmit={onSubmitData}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={formData.email} onChange={(event) => handleInputChange("email" ,event)} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label> {/* htmlfor is like className built in jsx syntax */}
          <input id="password" type="password" name="password" value={formData.password} onChange={(event) => handleInputChange("password" , event)}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
