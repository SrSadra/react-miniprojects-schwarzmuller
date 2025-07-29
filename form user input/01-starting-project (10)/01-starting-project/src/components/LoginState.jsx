import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password : ""
  })
  const [didEdit , setDidEdit] = useState({
    email: false,
    password: false
  })

  function onSubmitData(event){
    event.preventDefault();
    
  }

  const isEmailvalid = !didEdit.email || formData.email.includes("X");


  function handleLostFocus(identifier){
    setDidEdit(prev => ({
        ...prev,
        [identifier] : true
    }))
  }

  function handleInputChange(identifier , event){
    setFormData((prev) => (
      {
        ...prev,
        [identifier] : event.target.value
      }
    ));
    setDidEdit(prev => ({
        ...prev,
        [identifier] : false
    }))
  }

  return (
    <form onSubmit={onSubmitData}>
      <h2>Login</h2>

      <div className="control-row">
      <Input id="email" label={"email"} type="email" name="email" error={!isEmailvalid &&<p>email is invalid</p>} onBlur={() => handleLostFocus("email")} value={formData.email} onChange={(event) => handleInputChange("email" ,event)} />
      <Input id="password" label={"password"} type="password" name="password" value={formData.password} onChange={(event) => handleInputChange("password" , event)}/>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
