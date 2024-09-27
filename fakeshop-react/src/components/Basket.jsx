import React, { useContext} from 'react'
import ProductContext from '../context/ProductContext'
import BasketItem from './BasketItem'
import { Link } from 'react-router-dom'


const Basket = () => {
    const product = useContext(ProductContext)


  return (
    <>
    <header className='w-full h-14 mb-6 bg-gray-200 flex justify-around items-center fixed top-0' >
    <Link to={"/"}>Home</Link>
    <h1 className='font-extrabold overline decoration-lime-700 decoration-dotted font-mono antialiased'>Yahya Kala</h1>
    <Link to={"/basket"} className='relative'>
    <img src='logo.png' alt='Basket logo' className='w-10 h-10 ml-2 mr-2' />
    <p className='absolute top-5 left-10 w-2 h-2 rounded-full bg-gray-200 text-lime-700 font-extrabold'>
    {product.basket.length}
    </p>
    </Link>
  </header>
         {product.basket?product.basket.map((basketProduct) =>{
          return(
    <BasketItem key={basketProduct.id} data={basketProduct}/>
)  
}):<img src='empty.png' alt='empty basket' className='w-96 h-96'/>}
</>
)
}

export default Basket