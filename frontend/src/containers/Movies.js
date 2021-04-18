import React from "react";
import Movie from "../components/Movie";
import { useQuery, gql } from "@apollo/client";

const allMovies = gql`
  {
    movies {
      name
      genre
      year
    }
  }
`;

function Movies() {
  const { loading, error, data, refetch } = useQuery(allMovies);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data.movies.length === 0)
    return <p>Please add any movie of your choice</p>;
  return (
    <div className="movies">
      {data.movies.map((movie) => {
        return (
          <Movie
            key={movie.name}
            name={movie.name}
            genre={movie.genre}
            year={movie.year}
            image={movie.image}
            refetch={refetch}
          />
        );
      })}
    </div>
  );
}

export default Movies;
