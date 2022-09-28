import { addDoc, getFirestore, collection } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart =() => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Pedro',
            email: 'Pedro@gmail.com',
            phone: '3513456654',
            address: ' Av. Libertador 455'

        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice() ,
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection,order)
        .then(({ id }) => console.log(id))
    }
    
    
    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compras</Link>
            </>
        );
         
    } 
    return (
        <> 
          {
        cart.map(product => <ItemCart Key={product.id} product={product} />)
          }
          <p>
              total: {totalPrice()}
          </p>
          <button onclick={handleClick}>Emitir Compra</button>
        </>
    )
}
export default Cart