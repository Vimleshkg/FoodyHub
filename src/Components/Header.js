import { Link } from 'react-router-dom';
import Menu from './Menu';
import { useIsOnline } from './useIsOnline';
import UserContext from './utils/UserContext';
import {useContext} from 'react'


const Header=()=>{
    
    const User = useContext(UserContext);
    const isOnline= useIsOnline();

    return(
 
    <div className="flex bg-slate-300 justify-between px-4 sm:px-7 h-20 py-7 shadow-lg mb-5" >
    
    <div className="absolute top-1 ">
   <Link to='/' > <img className="h-16 w-16 rounded-full" src={"https://yt3.googleusercontent.com/ytc/APkrFKah_U3fYfBRFSrfbOQDK-bVut1ro6LhxW51eLd2=s900-c-k-c0x00ffffff-no-rj"}/>
   </Link>
   </div>

   {isOnline ? 'Online' : 'offline' }

   <h2>{User.name}</h2>

    <Menu/>
    
    </div>

 
    )
}
export default Header;