const Movie = require('../models/movie')


const movieResolvers = {
    movies: () => {
        return Movie.find({})
    },

    movieByName: (args) => {
        return Movie.findOne({ name: args.name })
    },

    addMovie: (args) => {
        const { name, genre, year } = args
        let movie = new Movie({
            name, genre, year
        })
        movie.save()
        return movie
    }
}

module.exports = movieResolvers