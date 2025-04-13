import { useState } from "react";

export function useFetch(fetchFn , initialData ){
    const [isFetching , setIsFetching] = useState();
    const [data , setFetchedData] = useState(initialData); // it's better to put some initial value for datas (can be as attr)
    const [error , setError] = useState();

      useEffect(() => { // remember to not use async for this react built in func
        async function fetchData(){
          setIsFetching(true);
          try{
          const data = await fetchFn();
        //   console.log(places);
          setFetchedData(data);
          setIsFetching(false);
          }
          catch (error){
            setError({message: error.message || "data can not be fetched"});
          }
          setIsFetching(false);
        }
    
        fetchData();
    } , [fetchFn]) // fetchFn based on the component using can be change and should make useEffect re-created again

    return {error, data, isFetching} // you can also return some setState function for using in another component
}