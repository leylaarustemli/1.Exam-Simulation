import MainContext from './Context/Context'
import ROUTES from './Routes/routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const router=createBrowserRouter(ROUTES)
const[data,setData]=useState([])
const[basket,setBasket]=useState([])
console.log(data);
useEffect(()=>{
  axios.get("http://localhost:5000/api/products").then(res=>{
    setData([...res.data])
  })
},[])


function addToBasket(id){
  let basketItem=basket.find(item=>item._id==id)
  if(basketItem){
    basketItem.count++
    basketItem.totalPrice+=basketItem.totalPrice
    setBasket([...basket])
  }
  else{
    let target=data.find(item=>item._id==id)
    let newItem={
      ...target,count:1,totalPrice:target.price
    }
    setBasket([...basket,newItem])
  }
}
const contextData={
  data,setBasket,setData,basket
}



  return (
    <MainContext.Provider value={contextData} >
    <RouterProvider router={router}/>
    </MainContext.Provider>
  )
}

export default App
