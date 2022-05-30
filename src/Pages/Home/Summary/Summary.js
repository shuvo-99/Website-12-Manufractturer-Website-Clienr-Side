import React from "react";
import summary from "../../../images/summary.jpg";

const Summary = () => {
  return (
    <div className="items-center">
      <h2 className="text-center text-3xl font-bold uppercase">
        Bussiness Summary
      </h2>
      <div className="grid grid-cols-2">
        <div>
          <img
            style={{
              width: "75%",
              height: "75%",
            }}
            src={summary}
            className="items-center"
          />
        </div>
        <div>
          We currently have 40 million users worldwide. Its a huge achivement
          for all of us.
          <br />
          Our user have increased by 50% from the previous times. It shows our
          good and trusthworthy ourr services are.
          <br />
          We ranked in the top 10 manufractures companies in the world.
          <br />
          We were able to decrease our shipment days by 10 days. Its a good news
          for us and the customers..
        </div>
      </div>
    </div>
  );
};

export default Summary;
