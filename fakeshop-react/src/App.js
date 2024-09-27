import React, { useEffect, useState } from 'react'
import ProductContext from './context/ProductContext'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

function App() {
  const [basket, setBasket] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    const products = async () => {
      try{  
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        return data
      }
      catch{console.warn("Can't fetch data")
        alert("Can't fetch data! Please check your internet connection.")}
      }
      products().then(data => setData(data))
      
      
    }, [])

    return (
      <BrowserRouter>
    <ProductContext.Provider value={{basket , setBasket ,data }}>
    <Routes/>
    </ProductContext.Provider>
    </BrowserRouter>

)
}

export default App