import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';


function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({request , params}) => {
  const form = await request.formData();

  const searchparams = new URL(request.url).searchParams;
  const mode = searchparams?.mode || "login";

  console.log(mode);

  if (mode !== "login" && mode !== "signup"){
    throw json({message : "unsupported mode"} , {status : 422});
  }

  const data = {
    email : form.get("email"),
    password : form.get("password")
  }

  console.log(mode);
  

  const res = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST', 
    headers: {
      "Content-Type"  : "application/json"
    },
    body: JSON.stringify(data)
  });

  if(res.status === 401 || res.status === 422){
    return res;
  }

  if (!res.ok){
    throw json({message : "could not signup/login"}, {status: 422});
  }

  const dataJson = await res.json();
  const token = dataJson.token;

  localStorage.setItem('token' , token);
  const expiration = new Date();
  localStorage.setItem('expiration', expiration.setHours(expiration.getHours + 1).toString());

  return redirect("/");

}