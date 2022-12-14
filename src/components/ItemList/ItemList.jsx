import Item from '../ItemList/ItemList';
import React from 'react';

export const ItemList = ({data =[]}) => {
  return (
    data.map(film => <Item key={film.id} info={film} />)
  );
}

export default ItemList;