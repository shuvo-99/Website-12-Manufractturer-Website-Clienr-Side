import { itMatchesOne } from "daisyui/src/lib/postcss-prefixer/utils";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = ({}) => {
  const { toolID } = useParams();
  const [tool, settool] = useState({});
  const [user, loading, error] = useAuthState(auth);
  // const { _id, name, minQuantity, availableQuantity } = products;

  useEffect(() => {
    const url = `https://cryptic-island-49666.herokuapp.com/tool/${toolID}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => settool(data));
  }, []);

  const handleorder = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    const order = {
      orderId: tool._id,
      orderItem: tool.name,
      quantity,
      price: quantity * tool.price,
      email: user.email,
      name: user.displayName,
      phone: event.target.phone.value,
      address: event.target.address.value,
    };

    fetch("https://cryptic-island-49666.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Order is Submitted`);
        } else {
          toast.error(`Order is not submitted`);
        }
      });
  };

  const handleRestockItems = (event) => {
    //   event.preventDefault();
    // const quantity = event.target.quantity.value;
    // const RestockItem = { quantity };
    // send data to the server
    //   const url = `https://cryptic-island-49666.herokuapp.com/tool/${toolID}`;
    //   fetch(url, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(RestockItem),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log("success", data);
    //       alert("Restock Items successfully!!!");
    //       event.target.reset();
    //       // Adding reload button to show updated items on UI
    //       window.location.reload(false);
    //     });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <h1 className="text-center text-3xl">Order for: {tool.name}</h1>
        <div className="card-body">
          <form onSubmit={handleorder}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                disabled
                value={user?.displayName || ""}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                disabled
                value={user?.email || ""}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  Quantity ({tool.minQuantity} - {tool.availableQuantity})
                </span>
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="input input-bordered w-full max-w-xs"
                min={tool.minQuantity}
                max={tool.availableQuantity}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                name="phone"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
