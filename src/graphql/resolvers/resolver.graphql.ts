import { UserService } from "../../services/User.services";
import { AlienRaceService } from "../../services/AlienRace.services";
import { LighSaberService } from "../../services/LighSaber.services";
export const resolvers = {
    Query: {
      users: () => {
        return UserService.getUsers();
      },
      getAliensRace: () => {
          return AlienRaceService.getAllAliensRace();
      },
      getLighSaber: () => {
          return LighSaberService.getAllLighSaber();
      }
    },
    Mutation: {
      createUser: async(_:void,{user}:any)=>{
        return await UserService.createUser(user);
      },
      login: async(_:void,{user}:any) =>{
        return await UserService.login(user);
      },
      userGetById: async(_:void,{id}:any,contextValue:any)=>{
        console.log(contextValue)
        if(contextValue.name){
          return await UserService.getById(id.id);
        }else{
          throw new Error("no autorizado")
        }
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
      }
    }
};