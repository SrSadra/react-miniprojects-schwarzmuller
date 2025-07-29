import { redirect } from "react-router-dom";

export const logoutAction = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration"); // expiration of token that has been set on Authentication.js
    // console.log("salam");
    return redirect("/");
}