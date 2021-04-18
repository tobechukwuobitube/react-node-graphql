// const Movie = require('../models/movie')

const movies = [
    {
      id: 1,
      name: "John Wick Parabellum1",
      genre: "Action",
      year: 2019,
      image: "https://rb.gy/oxmimp",
    },
    {
      id: 2,
      name: "John Wick Parabellum2",
      genre: "Action",
      year: 2019,
      image: "https://rb.gy/oxmimp",
    },
    {
      id: 3,
      name: "John Wick Parabellum3",
      genre: "Action",
      year: 2019,
      image: "https://rb.gy/oxmimp",
    },
    {
      id: 4,
      name: "John Wick Parabellum4",
      genre: "Action",
      year: 2019,
      image: "https://rb.gy/oxmimp",
    },
    {
      id: 5,
      name: "John Wick Parabellum5",
      genre: "Action",
      year: 2019,
      image: "https://rb.gy/oxmimp6",
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
  ];


const movieResolvers = {
    movies: () => {
        return movies
    },

    addMovie: (args) => {
        return {
            name: args.name
        }
    }
}

module.exports = movieResolvers