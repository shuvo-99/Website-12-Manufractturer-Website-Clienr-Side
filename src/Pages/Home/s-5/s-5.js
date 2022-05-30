import React from "react";
import girl from "../../../images/girl.jpg";
const S5 = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold uppercase">Meet our CEO</h2>
      <br />
      <div className="grid grid-cols-2">
        <div>
          <img
            style={{
              width: "75%",
              height: "75%",
            }}
            src={girl}
            className="items-center"
          />
        </div>
        <div>
          I am happy to be a have made this amazing bussiness and day by day it
          has rose to its expectation. i am happy and hope my company rises up
          more in the future.
        </div>
      </div>
    </div>
  );
};

export default S5;
