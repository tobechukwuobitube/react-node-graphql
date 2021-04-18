import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const ADD_MOVIE = gql`
  mutation AddMovie($name: String!, $genre: String!, $year: String!) {
    addMovie(name: $name, genre: $genre, year: $year) {
      name
      genre
      year
    }
  }
`;

const GET_MOVIES = gql`
  {
    movies {
      name
      genre
      year
    }
  }
`;

function AddMovie() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const [add_movie] = useMutation(ADD_MOVIE, {
    refetchQueries: [
      {
        query: GET_MOVIES,
      },
    ],
  });

  const submitMovie = (event) => {
    event.preventDefault();
    add_movie({ variables: { name, genre, year } });
    setName("");
    setGenre("");
    setYear("");
  };

  return (
    <div className="addMovie" id="form">
      <form onSubmit={submitMovie}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name=""
          id=""
          required
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <label htmlFor="">Genre</label>
        <input
          type="text"
          name=""
          id=""
          required
          onChange={(event) => setGenre(event.target.value)}
          value={genre}
        />
        <label htmlFor="">Year</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="(optional)"
          onChange={(event) => setYear(event.target.value)}
          value={year}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
