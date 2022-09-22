import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { films } from '../Archivo/Archivo';




export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {detalleId} = useParams();
   
  useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(films);
        }, 3000);
     });
     getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    },[detalleId])

  
 
 
  return (
    <ItemDetail data={data} />
  );
}

export default ItemDetailContainer;