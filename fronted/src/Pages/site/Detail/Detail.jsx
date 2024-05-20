import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Detail.css"
import {Helmet} from "react-helmet";

const Detail = () => {
  const[detail,setDetail]=useState([])
  const{id}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/products/${id}`).then(res=>{setDetail(res.data)})
  })
  return (
    <div className='detail'>
       <Helmet>
        <title>Detail</title>
       
    </Helmet>
<div className="left-detail">
  <img src={detail.image} alt="" />
</div>
<div className="right-detail">
  <h3>Title:{detail.title}</h3>
  <h2>Price:{detail.price}</h2>
  <p className='category'>category:{detail.category}</p>
  <p className='description'>Description:{detail.description}</p>

</div>
    </div>
  )
}

export default Detail