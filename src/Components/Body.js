import {useState, useEffect} from 'react'
import { MyFood } from './MyFoodAPI';
import { Card } from './Card';
import ShimerUI from './ShimerUI';
import { Link } from 'react-router-dom';
import errorRes from './errorRes' 


const Body=()=>{

     const [filterRestaurants, setFilterRestaurants]= useState();
     const [realRestaurant, setRealRestaurant] = useState();
     const [searchText, setSearchText]= useState("");
 
   function getRestaurant(){
    
      const filterRes = realRestaurant.filter((restaurant)=>{
        return restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase());
      }) 
     
      setFilterRestaurants(filterRes); 
     
    
      
   }

    useEffect(()=>{

        getData();
            
    },[]);

    const getData=async()=>{
        
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const jsonData= await data.json();
        setFilterRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRealRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //    console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       }
    
    

    return (!filterRestaurants) ? <ShimerUI/> :
    (
    <> 
      <div className='flex justify-center'>
         <div className=' shadow-lg w-1/3 flex'>
        <input type="text" className='ml-2 w-full pl-4 h-8' value={searchText} placeholder='Search' onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button className='bg-black w-14 h-8 p-1 text-sm text-white rounded-sm' onClick={getRestaurant}>Search</button>
        </div>
        </div> 
       {
       filterRestaurants=="" ? <h1>Restaurant Not found</h1> : 
        <div className='flex justify-center flex-wrap mt-2'>
        {
            filterRestaurants.map((restaurant,i)=>{
             return   <Link key={restaurant?.info?.id} to={"/restaurantData/" + restaurant.info.id} > <Card {...restaurant.info} key={restaurant.info.id}/>  </Link>
            
            })
        }
       
        <button onClick={()=>{console.log(filterRestaurants)}}>click</button>
       </div>
       
    }
        </>
    )
}
export default Body;