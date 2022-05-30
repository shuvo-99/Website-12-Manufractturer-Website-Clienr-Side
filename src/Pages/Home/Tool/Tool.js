import React from "react";

const Tool = ({ tool }) => {
  const {
    _id,
    name,
    image,
    description,
    price,
    minQuantity,
    availableQuantity,
  } = tool;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Minimum Quantity: {minQuantity}</p>
        <p>Available Quantity: {availableQuantity}</p>
        <p>Price: Tk. {price}</p>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
