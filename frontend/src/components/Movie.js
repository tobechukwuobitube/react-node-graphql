import React from "react";

function Movie(props) {
  return (
    <div className="card">
      <div className="container">
        <img src='https://rb.gy/oxmimp' alt="John Wick" width="100%" height="250px" />
        <h3>{props.name}</h3>
        <h4>
          {props.genre} - {props.year}
        </h4>
      </div>
    </div>
  );
}

export default Movie;
