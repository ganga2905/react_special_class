import React from 'react'
import './Home.css'
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const Home = () => {

    const products=[
        {
            id:1,
            name:"Fountation",
            price:3000,
            image:img1
        },
         {
            id:2,
            name:"Primer",
            price:1000,
            image:img2
        },
         {
            id:3,
            name:"Lipstick",
            price:700,
            image:img3
        }
        //  {
        //     id:1,
        //     name:"",
        //     price:1000,
        //     image:
        // },
        //  {
        //     id:1,
        //     name:"",
        //     price:1000,
        //     image:
        // },
        //  {
        //     id:1,
        //     name:"",
        //     price:1000,
        //     image:
        // },

    ]


  return (
    <div className='product'>
        {
            products.map((ele)=>(
            <div className='cart' key={ele.id}>
                <img src={ele.image} alt={ele.name}/>
                <h3>{ele.name}</h3>
                <p>{ele.price}</p>

                <div className='btn'>
                    <button>-</button>
                    <button>+</button>

                </div>

            </div>

            ))

        }
    </div>
  )
}

export default Home