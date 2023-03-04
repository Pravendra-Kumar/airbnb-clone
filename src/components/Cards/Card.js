import React from 'react'
import "./Cards.css"
import hotel from "../../assets/hotels/hotel-1.jpeg"
import StarSharpIcon from '@mui/icons-material/StarSharp';

const Card = () => {
  return (
    <div className='card-box'>
       <img className='card-img' src ={hotel}/>
       <div className='card-info-flex'>
         <h3 className='card-title'>place</h3>
         <div className='card-rating'>
          <StarSharpIcon/>
          <p>4.88</p>
         </div>
        </div>
        <p style={{margin:0,color:"var(--font-grey)"}}>Beach and sea views</p>
        <p style={{margin:0, color:"var(--font-grey)"}}>19-25 May</p>

    </div>
  )
}

export default Card