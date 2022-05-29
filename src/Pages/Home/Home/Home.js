import React from "react";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import Summary from "../Summary/Summary";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Summary></Summary>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;