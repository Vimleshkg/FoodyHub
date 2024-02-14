import React from 'react';
import './App.css';

const CardBody = ({ id, image, name, description, price }) => {
  return (
   
    <div className='card-container'>
     
        <h3>{id}</h3>
        <img src={image} alt={name} className='card-image'></img>
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>${price}</h4>
      </div>
    
 
  );
};

export default CardBody;
