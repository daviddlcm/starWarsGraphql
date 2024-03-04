import { UserService } from "../../services/User.services";
import { AlienRaceService } from "../../services/AlienRace.services";
import { LighSaberService } from "../../services/LighSaber.services";
import  { MovieService }  from "../../services/Movie.services";
import { PlanetService } from "../../services/Planet.services";
import { User } from "../../models/mongodb.model";
import axios from "axios";
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
          await ansWerWebHoks("createAlienRace",{
            type:"createAlienRace",
            data:newAlien
          })

          return await AlienRaceService.createAlienRace(newAlien);
        }else{
          throw new Error("no autorizado")
        }
      },
      createLighSaber: async(_:void,{LighSaber}:any,contextValue:any)=>{
        if(contextValue.name){
          const result=await LighSaberService.createLighSaber(LighSaber)
          await ansWerWebHoks("createLighSaber",{
            type:"createLighSaber",
            data:{
                result
            }
          })
          
          return result;
        }else{
          throw new Error("no autorizado")
        }
      },
      createMovie:async(_:void, {movie}:any,contextValue:any)=>{
        if(contextValue.name){
          const res=await MovieService.createMovie(movie)
          await ansWerWebHoks("createMovie",{
            type:"createMovie",
            data:res
          })
          return res;
        }else{
          throw new Error("no autorizado")
        }
      },
      createPlanet:async(_:void, {planet}:any,contextValue:any)=>{
        if(contextValue.name){
          const res=await PlanetService.createPlanet(planet)
          await ansWerWebHoks("createPlanet",{
            type:"createPlanet",
            data:res
          })
          return res;
        }else{
          throw new Error("no autorizado")
        }
      },
      deletePlanet:async(_:void, {id}:any,contextValue:any)=>{
        if(contextValue.name){
          const res=await PlanetService.deletePlanet(id.id)
          await ansWerWebHoks("deletePlanet",{
            type:"deletePlanet",
            data:res
          })
          return res;
        }else{
          throw new Error("no autorizado")
        }
      },
      addUserWebHook:async(_:void, {webHook}:any,contextValue:any)=>{

        if(contextValue._id){
          try{
            const userall=await User.findById({_id:contextValue._id})
             
            
            console.log(userall?.webHokes)
            await User.updateOne({_id:contextValue._id},
              {$set:{webHokes:[
                ...userall?.webHokes as [],
                {webHook:webHook.webHook,url:webHook.url}

              ]}})
           
          
              
            return "webHook agregado"
          }catch(e){
            console.log(e)
          }
          
        }
        throw new Error("no autorizado")
        
      }
    }
};



const ansWerWebHoks=async(webHokesname:string,data:any)=>{
   const users=await User.find()
   for (let i = 0; i < users.length; i++) {
      let element=users[i]
      element.webHokes.map(async(web:any)=>{
        if((web.webHook as string).toLowerCase()==webHokesname.toLowerCase()){
          await axios.post(web.url, data)
        }
      })
   }

}