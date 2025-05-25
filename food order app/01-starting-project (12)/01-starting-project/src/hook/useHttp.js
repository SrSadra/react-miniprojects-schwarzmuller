import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url , config){
    console.log("conf" , config);
    
    const res = await fetch(url , config);
    const resData = await res.json();
    console.log("ajjj" , resData);
    
    if (!res.ok){
        throw new Error(resData.message || "something went wrong");
    }

    return resData;
}


export default function useHttp(url , config , initialValue){
    const [data, setData] = useState(initialValue);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState();

    function clearData(){
        setData(initialValue);
    }

    const sendRequest = useCallback(async function sendRequest(dataa){ // sendRequest will be created only once
        setIsLoading(true);
        try{
            
            let resData;
            if (dataa){
                resData = await sendHttpRequest(url , {...config , body : dataa});
            }
            else{
                resData = await sendHttpRequest(url , config);
            }
            console.log(resData , "Dada");
            
            setData(resData);
        }
        catch(error){
            
            setError(error.message || "something went wrong");
        }
        setIsLoading(false);
    }, [url , config])

    useEffect(() => {
        if ((config && (config.method === "GET" || !config.method)) || (!config)){
            sendRequest();
        }
    }, [config, sendRequest])
    
    return {
        data, 
        isLoading,
        error,
        sendRequest,
        clearData
    }
} 