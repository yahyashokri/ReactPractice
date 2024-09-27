import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import logo from "./assets/logo.png"

const Item = ({data}) => { 
  const product = useContext(ProductContext)
  const addBasket = (e) => {
    !product.basket.includes(data) ? product.setBasket(oldData => [...oldData , data]) : alert("Product is out of stock!")
    console.log(product.basket)
  }
  return (
    !data ?<div>
     loading...
    </div>
    : <div className="grid grid-cols-2 grid-rows-7 border-solid border-e border-b border-gray-300 h-[400px] w-full mt-14">
    <h2 className="col-start-1 col-end-3 row-auto ml-4 font-serif font-bold">{data.title}</h2>
            <p className="col-start-2 col-end-3 row-start-2 row-end-6 text-gray-700 text-[12px]">{data.description}</p>
            <img src={data.image} alt={data.title} className='col-start-1 col-end-2 row-start-2 row-end-6 w-44 h-44 ml-10 hover:opacity-95 hover:scale-105' />
            <p className="col-start-1 col-end-2 row-start-7 row-end-8 mt-4 ml-4 text-gray-700 text-base">Price: ${data.price}</p>
            <p className="col-start-1 col-end-2 row-start-6 row-end-7 mt-3 ml-4 text-gray-700 text-base">Rating: {data.rating.rate}</p>
            <p className="col-start-1 col-end-2 row-start-6 row-end-7 mt-8 ml-4 text-gray-700 text-base">{data.rating.count} People rated</p>
            <span className="col-start-1 col-end-2 row-start-5 row-end-6 mt-8 ml-4 text-gray-700 text-sm">Product category: {data.category}</span>
            <button onClick={addBasket} className="col-start-2 col-end-3 row-start-7 row-end-8 mt-5 ml-14 w-36 h-8 bg-lime-700 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded flex justify-center items-center" id={data.id}>Add to basket</button>
                </div>
  )
}

export default Item