import React, { useContext } from 'react'
import "./CardSection.css"
import MainContext from '../Context/Context'
const CardSection = () => {
    const{data}=useContext(MainContext)
  return (
    <div className='cardsection'>
<div className="container">
    <div className="cardss">
       {data.map((item,index)=>(
         <div className="cardd">
         <img src={item.image} alt="" />
         <h5>{item.title}</h5>
         <p>{item.category}</p>
         <p>{item.price} <i class="fa-solid fa-arrow-right"></i></p>
         <div className="buttons">
         <button id='basket'>basket</button>
         <button id='detail'>detail</button>
         </div>
       
     </div>
       )

       )}
       
    </div>
</div>
    </div>
  )
}

export default CardSection