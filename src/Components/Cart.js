 import { useSelector } from "react-redux";
 import { ImageLink } from "./utils/ImageLink";

 const Cart=()=>{

    const getSliceData = useSelector((store)=> store.cart.items);

    return(
        <div className="flex">
        {
            getSliceData.length==0 ? <h1> Cart is Empty</h1> :
        getSliceData.map((item)=>{
            return(
              
            <div className="w-56 h-64 pl-2 pt-2 relative overflow-auto bg-slate-200 rounded-lg m-2 shadow-lg">
            <div className=''>
              <img className="  w-52 h-28" src={ImageLink+item?.card?.info?.imageId} />
              </div>
              <div className='pl-2'>
              <h3 className="font-bold  pt-4">{item?.card?.info?.name}</h3>
              <h4 className=" pt-1">{item?.card?.info?.price}</h4>
              <h4 className=" pt-1">{item?.card?.info?.ratings.aggregatedRating?.rating} stars</h4>
            
              </div>
            </div>

        )}
        )
        }
        </div>
        
    )
        
 }

 export default Cart;