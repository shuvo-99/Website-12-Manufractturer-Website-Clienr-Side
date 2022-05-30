import React from "react";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import S5 from "../s-5/s-5";
import S6 from "../S-6/S-6";
import Summary from "../Summary/Summary";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Summary></Summary>
      <Reviews></Reviews>
      <S5></S5>
      <S6></S6>
    </div>
  );
};

export default Home;
