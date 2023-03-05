import React from 'react'
import "./Cards.css"
import Card from './Card'
import {list} from "../../assets/cards-list"

function Cards() {
  return (
    <div className="cards-flex">
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Cards