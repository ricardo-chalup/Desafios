import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore , getDocs, collection, query, where } from'firebase/firestore';






export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {categoriaId} = useParams();
   
  useEffect(() => {
    
     const querydb = getFirestore();
     const queryCollection = collection(querydb,  'Productos');
     if (categoriaId) {
      const queryFilter = query(queryCollection, where('category', '==', categoriaId))
      getDocs(queryFilter)
       .then(res => setData(res.docs.map(Productos => ({ id: Productos.id, ...Productos.data()}))));
        }else {
          getDocs(queryCollection)
          .then(res => setData(res.docs.map(Productos => ({ id: Productos.id, ...Productos.data()}))));
        }
     }, [categoriaId])


  
 
 
  return (
    <ItemDetail data={data} />
  );
}

export default ItemDetailContainer;