import React from "react";
import "./ItemDetail.css";

export const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={data.image} alt="" />
        <div className="Content">
          <h1>{data.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
