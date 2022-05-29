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
  // const navigate = useNavigate();

  // const navigateToInventory = (id) => {
  //   navigate(`/item/${id}`);
  // };
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={image} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>Minimum Quantity: {minQuantity}</p>
        <p>Available Quantity: {availableQuantity}</p>
        <p>Price: Tk. {price}</p>
        <p>{description}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
