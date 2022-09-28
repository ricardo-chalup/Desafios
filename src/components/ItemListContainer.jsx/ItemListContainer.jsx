import React, { useEffect,useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore , collection, getDocs, query, where } from'firebase/firestore';


export const ItemListContainer = ({ texto }) => {
    
   const [data, setData] = useState([]);

   const { categoriaId } = useParams();
     
     useEffect(() =>{
      const querydb = getFirestore();
      const queryCollection = collection(querydb,  'Productos');
      

      if (categoriaId){
        const queryFilter = query(queryCollection, where('category','==', categoriaId))
        getDocs(queryFilter)
           .then(res => setData(res.docs.map(Productos => ({id: Productos.id, ...Productos.data() }))))
      } else {
        getDocs(queryCollection)
           .then(res => setData(res.docs.map(Productos => ({id: Productos.id, ...Productos.data() }))))
      }
    }, [categoriaId]) 
      
        
          
           
            
        
    return (
        <>
          <h1>{texto}</h1>
          
          <ItemList data={data} />
          
        </>
        

    );
}

export default ItemListContainer;

