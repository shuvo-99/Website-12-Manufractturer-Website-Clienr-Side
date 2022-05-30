import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Tool = ({ tool, setProducts }) => {
  const {
    _id,
    name,
    image,
    description,
    price,
    minQuantity,
    availableQuantity,
  } = tool;

  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const navigateToPurchase = (id) => {
    navigate(`/tool/${id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Minimum Quantity: {minQuantity}</p>
        <p>Available Quantity: {availableQuantity}</p>
        <p>Price: Tk. {price} (per peice)</p>
        <p>{description}</p>
        <div className="card-actions justify-center">
          {/* <label
            htmlFor="order-modal"
            // disabled={slots.length === 0}
            onClick={() => setProducts(tool)}
            className="btn btn-sm btn-primary text-white uppercase "
          >
            Order
          </label> */}
          <a
            href="#"
            onClick={() => navigateToPurchase(_id)}
            className="btn btn-warning"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tool;
