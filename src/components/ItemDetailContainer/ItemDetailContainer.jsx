import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';


const films =[
  {id: 1, image:"https://e.rpp-noticias.io/normal/2020/05/18/345934_943539.jpg",category:'films', title:"Deadpool"},
  {id: 2, image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/capita-n-ame-rica-el-primer-vengador-1525786476.jpg?crop=1xw:1xh;center,top&amp;resize=480:*", category:'films', title:"Capitan America"},
  {id: 3, image:"https://www.themoviedb.org/t/p/w220_and_h330_face/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",category:'films', title:"Thor: Ragnarok"},
  {id: 4, image:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/lGIkv9fQ3i7yVcJXDvG0Vry00LI.jpg" ,category:'films', title:"La Bestia" },
  {id: 5, image: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/l00ff9dmop1UBfb4QNrLMQl5fgc.jpg", category:'series', title:"Friends",   
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {detalleId} = useParams();
   
  useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(films);
        }, 3000);
     });
     getData.then(res => setData(res.find(film => film.id === parsenInt(detalleId))));
    },[])

 
 
 
  return (
    <ItemDetail data={data} />
  );
}

export default ItemDetailContainer;