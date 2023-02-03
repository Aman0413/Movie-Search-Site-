import React from "react";
import "./MovieBox.scss";
import dummyImg from "../../assets/wp5207687.jpg";

function MovieBox({ Title, Poster }) {
  return (
    <div className="MovieBox">
      <div className="image">
        <img src={Poster} alt="" />
      </div>
      <div>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieBox;
