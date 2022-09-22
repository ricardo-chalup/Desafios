import React from 'react';
import { useCartContext } from '../../Context/CartContext';

export const CarWidget = () => {
   const { totalProducts } = useCartContext();
    return(
        <>
        <i className="bi bi-cart3"></i>
        <span>{totalProducts() || '' }</span>
        </>
    );
}

export default CarWidget;