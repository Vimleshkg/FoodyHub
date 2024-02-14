import React from 'react'
import { useState, useEffect } from 'react';
import { json, useParams } from 'react-router-dom'
//import { restaurants } from './MyFoodAPI';
import { useFetchres } from './utils/useFetchres';
import { ImageLink } from './utils/ImageLink';
import {useDispatch} from 'react-redux';
import { addItem, removeItem } from './utils/StoreSlice';



const RestaurantData = () => {

  const dispatch = useDispatch();

 const { resid } = useParams();
 const [restDetails, setRestDetails] = useState(null);
 const [restList, setRestList] = useState(null);

 function addItemCart(item){
    dispatch(addItem(item));
 }
 function removeItemCart(item){
   dispatch(removeItem(item))
}


 useEffect(()=>{

  getData();
      
},[]);

async function getData(){
  try{
  const data= await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=30.9002695&lng=75.8581159&restaurantId='+resid);
  const jsonData= await data.json()

  console.log(jsonData?.data?.cards[0]?.card?.card?.info);
   
  if(jsonData?.data?.cards[0]?.card?.card?.info)
    setRestDetails(jsonData?.data?.cards[0]?.card?.card?.info);
  
    if(jsonData.data.cards[2].groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards)
    setRestList(jsonData.data.cards[2].groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards);
    console.log(jsonData.data.cards[2].groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards);
  }
  catch(e){
    console.log(e);
  }



 }

 if(!restDetails)return null;

  return (
    <div className='flex relative left-96'>
      <div className="h-72 w-72 p-6 m-5 flex flex-col justify-center pl-12 bg-slate-500">
        <img  className="h-40 w-44" src={ImageLink+restDetails?.cloudinaryImageId}/> 
        <h2 className="font-bold text-xl">Name: {restDetails.name}</h2>
        <p className=" text-lg"> Area: {restDetails.areaName}</p>
        <p className=" text-lg">Cuisines: {restDetails.cuisines}</p>    
       </div>

       <div className='pl-10'>
        <h1 className='font-bold text-xl underline mb-4'>MENUS</h1>
          {
          restList && restList.map((item)=>{

            return < div className="flex">
            <p className='p-2'>{item?.card?.info?.name}</p> 

            <button onClick={()=>{addItemCart(item) }} className='p-2 m-2 font-bold bg-green-200 ' >Add</button>
            <button onClick={()=>{removeItemCart(item?.card?.info?.name) }} className='p-2 m-2 font-bold bg-green-200 ' >Remove</button>
            </div> 
          })
          
        }
       </div>



        <button onClick={()=>{console.log("")}}>click</button>
    </div>
  )
  }


export default RestaurantData