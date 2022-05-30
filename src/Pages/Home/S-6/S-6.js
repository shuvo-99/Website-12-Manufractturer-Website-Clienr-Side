import React from "react";
import dis from "../../../images/dis.jpg";

const S6 = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold uppercase">
        Discount Offer
      </h2>
      <br />
      <div className="grid grid-cols-2">
        <div>
          <img
            style={{
              width: "75%",
              height: "75%",
            }}
            src={dis}
            className="items-center"
          />
        </div>
        <div>
          We are happy to announce that we are going to offer discount on all
          our products from this month. So stay safe and keep shopping from us.
        </div>
      </div>
    </div>
  );
};

export default S6;
