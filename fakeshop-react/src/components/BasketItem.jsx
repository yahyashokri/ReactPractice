import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const BasketItem = ({data}) => { 
  const product = useContext(ProductContext)
  const removeFromBasket = (item) =>{
    product.setBasket(product.basket.filter((basketProduct) => basketProduct !== item))
}
  return (
    !data ?<div>
     loading...
    </div>
    : <div className="grid grid-cols-2 grid-rows-7 border-solid border-e border-b border-gray-300 h-[400px] w-full mt-14">
    <h2 className="col-start-1 col-end-3 row-auto ml-4 font-serif font-bold">{data.title}</h2>
            <p className="col-start-2 col-end-3 row-start-2 row-end-6 text-gray-700 text-base">{data.description}</p>
            <p className="col-start-1 col-end-2 row-start-7 row-end-8 mt-4 ml-4 text-gray-700 text-base">Price: ${data.price}</p>
            <p className="col-start-1 col-end-2 row-start-6 row-end-7 mt-3 ml-4 text-gray-700 text-base">Rating: {data.rating.rate}</p>
            <p className="col-start-1 col-end-2 row-start-6 row-end-7 mt-8 ml-4 text-gray-700 text-base">{data.rating.count} People rated</p>
            <img src={data.image} alt={data.title} className='col-start-1 col-end-2 row-start-2 row-end-6 w-44 h-44 ml-10 hover:opacity-95 hover:scale-105' />
            <span className="col-start-1 col-end-2 row-start-5 row-end-6 mt-8 ml-4 text-gray-700 text-sm">Product category: {data.category}</span>
            <button onClick={() => removeFromBasket(data)} className="col-start-2 col-end-3 row-start-7 row-end-8 mt-5 ml-14 w-50 h-8 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded flex justify-center items-center" id={data.id}>Remove from basket</button>
                </div>
  )
}

export default BasketItem