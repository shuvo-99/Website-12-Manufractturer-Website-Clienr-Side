import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ products, setProducts }) => {
  const { _id, name, minQuantity, availableQuantity } = products;
  const [user, loading, error] = useAuthState(auth);

  const handleOrder = (event) => {
    event.preventDefault();
    // const slot = event.target.slot.value;
    // console.log(_id, name, slot);

    // to close the modal
    setProducts(null);
  };

  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="order-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleOrder}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            {/* <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" /> */}
            {/* <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) =><option 
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select> */}

            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            {/* <label for="quantity">
              Order amount ({minQuantity}-{availableQuantity}):
            </label> */}
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Order Quantity"
              className="input input-bordered w-full max-w-xs"
              min={minQuantity}
              max={availableQuantity}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full max-w-xs"
            />
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

export default BookingModal;
