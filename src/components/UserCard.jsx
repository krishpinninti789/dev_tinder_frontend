import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = (user) => {
  const dispatch = useDispatch();
  const { _id, firstName, lastName, age, gender, bio } = user.user;
  const handleFeedRequest = async (status, id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + id,
        {},
        {
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(removeFeed(id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src="/fallback-profile.jpg" alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className=" text-white">{firstName + " " + lastName}</h2>
        <p>{age + " " + gender}</p>
        <p>{bio}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => handleFeedRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleFeedRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
