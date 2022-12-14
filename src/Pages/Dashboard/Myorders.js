import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";

const Myorders = () => {
  const [orders, setorders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch("https://cryptic-island-49666.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setorders(data));
  }, []);

  // const handleDelete = (id) => {
  //   const proceed = window.confirm("Are you sure?");
  //   if (proceed) {
  //     const url = `https://cryptic-island-49666.herokuapp.com/order`;
  //     fetch(url, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data);
  //         const remaining = orders.filter((orders) => orders._id !== id);
  //         setorders(remaining);
  //         window.location.reload(false);
  //       });
  //   }
  // };

  return (
    <div>
      <h2>My Orders: {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Phone number</th>
              <th>Address</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.orderItem}</td>
                <td>{a.quantity}</td>
                <td>{a.phone}</td>
                <td>{a.address}</td>
                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myorders;
