import { UserService } from "../../services/User.services";
import { AlienRaceService } from "../../services/AlienRace.services";
import { LighSaberService } from "../../services/LighSaber.services";
import  { MovieService }  from "../../services/Movie.services";
import { PlanetService } from "../../services/Planet.services";
export const resolvers = {
    Query: {
      users: () => {
        return UserService.getUsers();
      },
      getAliensRace: (_:void,{pagination}:any) => {
          return AlienRaceService.getAllAliensRace(pagination);
      },
      getLighSaber: () => {
          return LighSaberService.getAllLighSaber();
      },
      getMovies: () => {
          return MovieService.getAllMovies();
      },
      userGetById: async(_:void,{id}:any,contextValue:any)=>{
        if(contextValue.name){
          return await UserService.getById(id.id);
        }else{
          throw new Error("no autorizado")
        }
      },
      getMoviesForName:async(_:void, {name}:any)=>{
          return await MovieService.getMoviesForName(name.name);
      },
      //paginacion
      getPlanetForGalaxy:async(_:void, {galaxy}:any)=>{

          return await PlanetService.getPlanetForGalaxy(galaxy);
      },
      //paginacion
      getAliensForPlanet:async(_:void, {planet}:any)=>{
          return await AlienRaceService.getAliensForPlanet(planet.planet);
      }
    },
    Mutation: {
      createUser: async(_:void,{user}:any)=>{
        return await UserService.createUser(user);
      },
      login: async(_:void,{user}:any) =>{
        return await UserService.login(user);
      },
      createAlienRace: async(_:void,{alien}:any,contextValue:any)=>{
        if(contextValue.name){
          const newAlien = {
            name: alien.name,
            description: alien.description,
            planet: alien.planet,
            language: alien.language,
            id_user: contextValue._id
          }
          return await AlienRaceService.createAlienRace(newAlien);
        }else{
          throw new Error("no autorizado")
        }
      },
      createLighSaber: async(_:void,{LighSaber}:any,contextValue:any)=>{
        if(contextValue.name){
          return await LighSaberService.createLighSaber(LighSaber);
        }else{
          throw new Error("no autorizado")
        }
      },
      createMovie:async(_:void, {movie}:any,contextValue:any)=>{
        if(contextValue.name){
          return await MovieService.createMovie(movie);
        }else{
          throw new Error("no autorizado")
        }
      },
      createPlanet:async(_:void, {planet}:any,contextValue:any)=>{
        if(contextValue.name){
          return await PlanetService.createPlanet(planet);
        }else{
          throw new Error("no autorizado")
        }
      },
      deletePlanet:async(_:void, {id}:any,contextValue:any)=>{
        if(contextValue.name){
          return await PlanetService.deletePlanet(id.id);
        }else{
          throw new Error("no autorizado")
        }
      }
    }
};