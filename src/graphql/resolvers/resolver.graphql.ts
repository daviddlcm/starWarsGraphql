import { UserService } from "../../services/User.services";
export const resolvers = {
    Query: {
      users: () => {
        return UserService.getUsers();
      },
    },
    Mutation: {
      createUser: async(_:void,{user}:any)=>{
        return await UserService.createUser(user);
      },
      login: async(_:void,{user}:any)=>{
        return await UserService.login(user);
      },
      userGetById: async(_:void,{id}:any,contextValue:any)=>{
        console.log(contextValue)
        if(contextValue.name){
          return await UserService.getById(id.id);
        }else{
          throw new Error("no autorizado")
        }
      }
    },
};