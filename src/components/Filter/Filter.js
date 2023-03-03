import React, {useState} from 'react'
import "./Filter.css"
import {links} from "../../assets/images-links"


const Filter = () => {
    const [selectedFilter, setSelectFilter] = useState(0);
  return (
    <div className='filter-div'>
    {links.map((item ,i )=>(
        <div 
        key={i} 
        className={`links-box ${i===selectedFilter && "selected-box"}`} 
        onClick={()=>{
            setSelectFilter(i);
            console.log(i);
            } }>
            <img className="links-img" src={item.imgSrc} />
            <p  className={`links-label ${i===selectedFilter && "selected-label"}`} >
               {item.label}
            </p>

        </div>
        
    ))}
    </div>
  )
}

export default Filter