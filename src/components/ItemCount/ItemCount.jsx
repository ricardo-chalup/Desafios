import './ItemCount.css';
import React, { useState } from 'react';

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(1);


  const decrease= ()=> {
        setCount(count - 1);
    
  }

  const increase =() => {
    setCount(count + 1);
  }

  return (
    <div className='counter'>
      <button disable={count <= 1} onClick={decrease}>-</button>
      <span>{count}</span>
      <button disable={count >= stock} onClick={increase}>+</button>
      <div>
           <button disable={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount;