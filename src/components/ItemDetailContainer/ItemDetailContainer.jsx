import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';

const films =[
  {id: 1, image:"https://e.rpp-noticias.io/normal/2020/05/18/345934_943539.jpg", title:"Deadpool"},
  {id: 2, image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/capita-n-ame-rica-el-primer-vengador-1525786476.jpg?crop=1xw:1xh;center,top&amp;resize=480:*", title:"Capitan America"},
  {id: 3, image:"https://www.themoviedb.org/t/p/w220_and_h330_face/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg", title:"Thor: Ragnarok"},

];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
 
  useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(films);
        }, 3000);
     });
     getData.then(res => setData(res));
    },[])

 
 
 
  return (
    <ItemDetail data={data} />
  );
}

export default ItemDetailContainer;