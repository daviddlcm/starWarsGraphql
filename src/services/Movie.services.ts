import { Movie } from "../models/movie.model";
import { MovieType } from "../types/MovieType";

export class MovieService {
    static async createMovie(movie:MovieType):Promise<any>{
        const newMovie = new Movie({
            name: movie.name,
            description: movie.description,
            director: movie.director,
            release_date: movie.release_date,
            language: movie.language
        })
        return await newMovie.save();
    }
    static async getMoviesForName(name:string):Promise<any>{
        return await Movie.findOne({name:name});
    }
    static async getAllMovies():Promise<any>{
        return await Movie.find();
    }
}