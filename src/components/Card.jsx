import React from "react";
import "../components/Card.css";
import { food } from "../data/food";
import { Icons } from "./icons/Icons";

function Card() {
  return(
    <div className="icons Wrap">

    {
      food.map((item)=>{
        return (
          <>
          <div className="card">
            <img src={item.image} alt="" />
            <h3>Melhor Comida do Senas</h3>
            <h4>H. Murilo</h4>
            <div className="icons">
              <Icons/>
            </div>
          </div>
          </>
        );
      })
    }
      </div>
  )


}

export default Card;
