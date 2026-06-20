import React from 'react'
import './Home.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';

const Home = ({addToCart}) => {

    const products=[
        {
            id:1,
            name:"Foundation",
            price:3000,
            img:img1

        },
         {
            id:2,
            name:"Primer",
            price:2500,
               img:img2
            
        },
         {
            id:3,
            name:"Lipstick",
            price:700,
               img:img3
            
        },
         {
            id:4,
            name:"Mascara",
            price:500,
            img:img4
            
        },
         {
            id:5,
            name:"EyeShadow",
            price:1500,
            img:img5
            
        }
    ]

  return (
    <div className='container'>
    {
        products.map((product)=>(
            <div className='cards'key={product.id} >
                <img src={product.img} alt={product.name}/>
                <h3>{product.name}</h3>
                <div className='price'>
                    <p>{product.price}</p>
                    <button onClick={()=>addToCart(product)}>Add To cart</button>   
                </div>
            </div>

        ))
    }
    </div>
  )
}

export default Home