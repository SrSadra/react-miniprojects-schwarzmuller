import { redirect } from "react-router-dom";


export const tokenDuration = () => {
    const expirationDate = localStorage.getItem("expiration");
    const expiration = new Date(expirationDate);
    const now = new Date();
    const duration = expiration - now;
    return duration;
} 

export const getAuthToken = () => {
    const token = localStorage.getItem("token");

    if (!token){
        return null;
    }

    const duration = tokenDuration();

    if (duration < 0){
        return 'EXPIRED';
    }
    
    return token;
}


export const checkAuthLoader = () => {
    const token = localStorage.getItem("token");
    if (!token){
        return redirect("/auth");
    }
}