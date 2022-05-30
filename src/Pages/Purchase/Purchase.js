import { itMatchesOne } from "daisyui/src/lib/postcss-prefixer/utils";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = ({ products, setProducts }) => {
  const { toolID } = useParams();
  const [tool, settool] = useState({});
  const [user, loading, error] = useAuthState(auth);
  // const { _id, name, minQuantity, availableQuantity } = products;

  useEffect(() => {
    const url = `http://localhost:5000/tool/${toolID}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => settool(data));
  }, []);

  const handleRestockItems = (event) => {
    //   event.preventDefault();
    // const quantity = event.target.quantity.value;
    // const RestockItem = { quantity };
    // send data to the server
    //   const url = `http://localhost:5000/tool/${toolID}`;
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
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="email"
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
                // min={tool.minQuantity}
                // max={tool.availableQuantity}
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
          </form>

          <button className="btn btn-outline">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
