import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Menu=()=>{

  const SelectorItem = useSelector(store=>store.cart.items);

return(
    <div >
      <ul className="flex text-sm sm:text-base ">
        <Link to='/'><li className="px-2">Home</li></Link>
       <Link to='/about'> <li className="px-2">About</li></Link>
       <Link to='/cart'> <li className="px-2">Cart - {SelectorItem.length}</li></Link>  
       <Link><li className="px-2">Contact</li ></Link>
        <Link> <li className="px-2">More</li> </Link>
      </ul>
    </div>
)
}
export default Menu;