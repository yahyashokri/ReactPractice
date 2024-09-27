import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
import ProductContext from '../context/ProductContext'
function Home() {
    const searchBar = useRef(undefined)
    const products = useContext(ProductContext)
    const [shownProduct, setShownProduct] = useState(products.data)
    const search = () =>{
        let word = searchBar.current.value
        setShownProduct(products.data.filter((products)=>{
            return products.title.toLowerCase().includes(word.toLowerCase())
        }))
    }
  return (
    <>
    <header className='w-full h-14 mb-6 bg-gray-200 flex justify-around items-center fixed top-0' >
      <Link to={"/basket"} className='relative'>
      <img src="logo.png" alt='Basket logo' className='w-10 h-10 ml-2 mr-2' />
      <p className='absolute top-5 left-10 w-2 h-2 rounded-full bg-gray-200 text-lime-700 font-extrabold'>
      {products.basket.length}
      </p>
      </Link>
      <h1 className='font-extrabold overline decoration-lime-700 decoration-dotted font-mono antialiased'>Yahya Kala</h1>
      <input type="text" onChange={search} ref={searchBar} placeholder='Search' className=' h-10 w-8/12 rounded-3xl'/>
    </header>
    <section className='grid grid-cols-2'>

 { shownProduct.map(
     (product) =>{
         return(
             <Item key={product.id} data={product}/>
            )
        }
    )}
    </section>
    </>
  )
}

export default Home