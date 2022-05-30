import React from "react";

const Review = ({ review }) => {
  console.log(review);
  const { name, image, rating, reviews } = review;
  // const navigate = useNavigate();

  // const navigateToInventory = (id) => {
  //   navigate(`/item/${id}`);
  // };
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={image} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>Rating: {rating}</p>
        <p>{reviews}</p>
      </div>
    </div>
  );
};

export default Review;
