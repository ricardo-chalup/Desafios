import React, { useEffect,useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { films } from '../Archivo/Archivo';








export const ItemListContainer = ({ texto }) => {
    
   const [data, setData] = useState([]);

   const { categoriaId } = useParams();
     
     useEffect(() =>{
      const getData = new Promise(resolve =>{
        setTimeout(() =>{
          resolve(films);
         }, 3000);
        });
        if (categoriaId){
          getData.then(res =>setData(res.filter(film =>film.category === categoriaId)));
          } else {
            getData.then(res => setData(res));
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

