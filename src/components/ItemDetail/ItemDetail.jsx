import "./ItemDetail.css";

import React, { useState } from 'react';
import { useCartContext } from "../../Context/CartContext";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
   }


   
  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={data.image} alt="" />
        <div className="Content">
          <h1>{data.title}</h1>
          {
            goToCart
            ? <Link to='/cart'>Terminar compra</Link>
            : <ItemCount initial={3} stock={5} onAdd={onAdd}/>
          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
