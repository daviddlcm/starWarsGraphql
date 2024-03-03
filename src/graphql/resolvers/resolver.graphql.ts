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
      }
    },
};