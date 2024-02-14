import React from 'react'

import CardBody from './CardBody';
import './App.css';
const Card = () => {


const products = 
  [
{
  "id": 1,
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSCVGAI9cGVKz8MUXz9SqPN-4UGWlN7SMFg&usqp=CAU",
  "name": "Laptop",
  "description": "Powerful laptop with high-performance specifications.",
  "price": 999.99,
 
},
{
  "id": 2,
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLn9f3Ovv1CeLqGp2ThV-WN1raBUL9OqZA-vgcsH6w5bVrMeKzFffvSlPD_kk19zDzupg&usqp=CAU",
  "name": "Smartphone",
  "description": "Latest smartphone with advanced features and a stunning display.",
  "price": 599.99,
  
},
{
  "id": 3,
  "image": "https://zebronics.com/cdn/shop/products/Zeb-Dynamic-pic10.jpg?v=1632138907&width=1024",
  "name": "Wireless Headphones",
  "description": "Premium wireless headphones for an immersive audio experience.",
  "price": 149.99,
  
},
{
  "id": 4,
  "image": "https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$650_519_PNG$",
  "name": "4K Smart TV",
  "description": "Ultra HD Smart TV with a sleek design and smart functionality.",
  "price": 799.99,
  
},
{
  "id": 5,
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YMlLYmX0VPLZ-Zj2sbI1i800L_SucILmuw&usqp=CAU",
  "name": "Digital Camera",
  "description": "High-quality digital camera for capturing stunning moments.",
  "price": 499.99,
  
},
{
  "id": 6,
  "image": "https://static.toiimg.com/thumb/msid-98991627,width-1280,height-720,resizemode-4/98991627.jpg",
  "name": "Gaming Console",
  "description": "Next-gen gaming console for an immersive gaming experience.",
  "price": 399.99,
 
},
{
  "id": 7,
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dfw7dNwyZLPzQaLnEFIrIqZMalRa7QrW8Tym0zIM6QuqfqH8VJams5qdooibUr82hjE&usqp=CAU",
  "name": "Fitness Tracker",
  "description": "Track your fitness goals with this advanced fitness tracker.",
  "price": 79.99,
  
},
{
  "id": 8,
  "image": "https://m.media-amazon.com/images/I/51q9WR-LfHL._AC_UF894,1000_QL80_.jpg",
  "name": "Coffee Maker",
  "description": "Premium coffee maker for brewing the perfect cup of coffee.",
  "price": 129.99,
  
}
];


return (
  <div>
    {products.map((item) => (
      <CardBody
        key={item.id}
        id={item.id}
        image={item.image}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    ))}
  </div>
);
};

export default Card;
