import React, {useState} from '../ItemCount/ItemCount';
import ItemCount from '../ItemCount';
import "./ItemDetail.css";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
   }

  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={data.image} alt="" />
        <div className="Content">
          <h1>{data.title}</h1>
          {
            goToCart
            ? <link to='/cart'>Terminar compra</link>
            : <ItemCount initial={3} stock={5} onAdd={onAdd}/>
          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
