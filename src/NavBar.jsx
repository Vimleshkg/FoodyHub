 import React from 'react'
 import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 import SearchIcon from '@mui/icons-material/Search';
const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className="nav-header">
       <img className='img-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaI1zj6Kjr_Mm7tJ-VGsexUq3cxPZ13HArhA&usqp=CAU' alt=''></img>
        <h3>Carto</h3>
      </div>

    <div className='input-box'>
        
        <input placeholder='Search your brand'></input>
        <SearchIcon className='search-icon'/>
    </div>
     

     <div className='header-lists'>
     <ul>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>
      <div className='cart-icon'>
      <ShoppingCartIcon />
    </div>
      </li>
    </ul> 

   
</div>
</div>
  )
}

export default NavBar
