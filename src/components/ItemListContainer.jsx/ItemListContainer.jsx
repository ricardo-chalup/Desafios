import React, { useEffect,useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore , collection, getDoc, query, where, } from'firebase/firestore';
import { db } from '../../../src/firebase/config';


export const ItemListContainer = ({ texto }) => {
    
   const [data, setData] = useState([]);

   const { categoriaId } = useParams();
     
     useEffect(() =>{
      const querydb = getFirestore();
      const queryCollection = collection(querydb, db,  'Productos');
      if (categoriaId){
        const queryFilter = query(queryCollection, where('category','==', categoriaId))
        getDoc(queryFilter)
           .then(res => setData(res.docs.map(Productos => ({id: Productos.id, ...Productos.data() }))))
      } else {
        getDoc(queryCollection)
           .then(res => setData(res.docs.map(Productos => ({id: Productos.id, ...Productos.data() }))))
      }
    }, [categoriaId]) 
      
        
          
           
            
        
    return (
        <>
          <title greeting={texto} />
          
          <ItemList data={data} />
          
        </>
        

    );
}

export default ItemListContainer;

