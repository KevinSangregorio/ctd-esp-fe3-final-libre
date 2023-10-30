/* Dependencies */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const currentFavs = localStorage.getItem("favs");
    const currentFavsParsed = JSON.parse(currentFavs)

    if (currentFavs) {
      if (!currentFavsParsed.includes({ id })) {
        localStorage.setItem("favs", JSON.stringify([...currentFavsParsed, { id, name, username }]));
      }
    } else {
      localStorage.setItem("favs", JSON.stringify([{ id, name, username }]));
    }
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="doctor" width="200px" />
      <p>{name}</p>
      <p>{username}</p>
      <p>ID: {id}</p>
      <Link to={`/dentist/${id}`} className="card__view_detail">
        View Detail
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
