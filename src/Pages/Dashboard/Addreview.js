import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const Addreview = () => {
  const { register, handleSubmit } = useForm();
  const [user, loading, error] = useAuthState(auth);

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://cryptic-island-49666.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <h1 className="text-center text-3xl">Add a Review</h1>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">User name</span>
              </label>
              <input
                type="text"
                // value={user?.displayName || ""}
                className="input input-bordered w-full max-w-xs"
                {...register("name")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                // value={user?.displayName || ""}
                className="input input-bordered w-full max-w-xs"
                min="0"
                max="5"
                {...register("rating")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Reviews</span>
              </label>
              <input
                type="text"
                // value={user?.displayName || ""}
                className="input input-bordered w-full max-w-xs"
                {...register("reviews")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                placeholder="Photo URL"
                type="text"
                {...register("image")}
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

export default Addreview;
