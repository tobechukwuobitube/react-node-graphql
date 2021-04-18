import React, { Component } from "react";
import Movie from "../components/Movie";

export default class Movies extends Component {
  state = {
    movies: [
      {
        id: 1,
        name: "John Wick Parabellum",
        genre: "Action",
        year: 2019,
        image: "https://rb.gy/oxmimp",
      },
      {
        id: 2,
        name: "John Wick Parabellum",
        genre: "Action",
        year: 2019,
        image: "https://rb.gy/oxmimp",
      },
      {
        id: 3,
        name: "John Wick Parabellum",
        genre: "Action",
        year: 2019,
        image: "https://rb.gy/oxmimp",
      },
      {
        id: 4,
        name: "John Wick Parabellum",
        genre: "Action",
        year: 2019,
        image: "https://rb.gy/oxmimp",
      },
      {
        id: 5,
        name: "John Wick Parabellum",
        genre: "Action",
        year: 2019,
        image: "https://rb.gy/oxmimp",
      },
      {
        id: 6,
        name: "John Wick Parabellum",
        genre: "Action",
        year: 2019,
        image: "https://rb.gy/oxmimp",
      },
      {
        id: 7,
        name: "John Wick Parabellum",
        genre: "Action",
        year: 2019,
        image: "https://rb.gy/oxmimp",
      },
      {
        id: 8,
        name: "John Wick Parabellum",
        genre: "Action",
        year: 2019,
        image: "https://rb.gy/oxmimp",
      },
    ],
  };
  render() {
    return (
      <div className="movies">
        {this.state.movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              name={movie.name}
              genre={movie.genre}
              year={movie.year}
              image={movie.image}
            />
          );
        })}
      </div>
    );
  }
}
