import './Item.css';

import React from 'react';

const Item = ({info}) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href='' className="film">
       <img src={info.image} alt="" />
       <p>{info.title}</p>
    </a>  
  );
}

export default Item