import React from "react";


import { toast } from "react-toastify";

function Card({ id, name, info, image, price }) {
  function bookingHandler(id) {
    toast.success("booked");
    console.log("booked", id);
  }
  return (
    <div className="card">
      <img src={image} alt="error" className="image" />
      <div className="tour-details">
        <h2 className="tour-price">{price}</h2>
        <h2 className="tour-name">{name}</h2>
      </div>
      <div className="description">{info}</div>
      <button className="btn-red" onClick={() => bookingHandler(id)}>
        Book-Now
      </button>
    </div>
  );
}

export default Card;
