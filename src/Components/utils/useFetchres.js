import {useState, useEffect} from 'react'

export const useFetchres=(resid)=>{

 const [restaurants, setRestaurants] = useState([]);

 useEffect(()=>{

    getData();
        
},[]);

async function getData(){
    
    const data= await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=30.9002695&lng=75.8581159&restaurantId='+resid);
    const jsonData= await data.json();
    setRestaurants(jsonData?.data?.cards[0]?.card?.card?.info);
    
   }

       return restaurants;
}