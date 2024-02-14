import {useState, useEffect} from 'react'

export const useIsOnline=()=>{

    const [isOnline, setIsOnline]= useState(true);

    useEffect(()=>{
     function onlineFun(){
        setIsOnline(true);
     };

     function offlineFun(){
        setIsOnline(false);
     }

     window.addEventListener('online', onlineFun);
     window.addEventListener('offline', offlineFun);

    },[])

   

   return isOnline; 
}