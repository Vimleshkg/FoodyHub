import { ImageLink } from "./utils/ImageLink"

export const Card = (restaurant) => {



  return (

    <div className="w-56 h-64 pl-2 pt-2 relative overflow-auto bg-slate-200 rounded-lg m-2 shadow-lg">
    <div className=''>
      <img className="  w-52 h-28" src={ImageLink+restaurant?.cloudinaryImageId} />
      </div>
      <div className='pl-2'>
      <h3 className="font-bold  pt-4">{restaurant.name}</h3>
      <h4 className=" pt-1">{restaurant.cuisines[0] +", "+ restaurant.cuisines[1] }</h4>
      <h4 className=" pt-1">{restaurant.avgRating} stars</h4>
    
      </div>
    </div>
  )
}
