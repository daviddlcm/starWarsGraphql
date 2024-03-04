import "dotenv/config";
import { UserType } from "../types/UserType";
import { User } from "../models/mongodb.model";
import bcrypt from "bcrypt";
import { GraphQLError } from 'graphql';
import jwt  from "jsonwebtoken";
const saltos = parseInt(process.env.SALTOS || "0");
//const secret:string = process.env.SECRET!;
export class UserService {
    static async createUser(data: UserType) : Promise <any> {
        const user = new User({
            name: data.name,
            email: data.email,
            password: bcrypt.hashSync(data.password, saltos)
        });
        return await user.save();
    }
    static async getUsers() : Promise <any> {
        return await User.find();
    }
    static async login(data: UserType) : Promise <any> {
        let bandera;
        const result = await User.findOne({email: data.email});
        
        if(result){
            bandera = bcrypt.compareSync(data.password, result.password);
        if(bandera){
            const token = jwt.sign(
                {result},"secret",{expiresIn:"2h"}
            );
            return {token};
        }
        if(!bandera){
            throw new GraphQLError('error en password o gmail', {
                extensions: {
                  code: 'not found',
                },
              });
        }
        }else{
            throw new GraphQLError('error en password o gmail', {
                extensions: {
                  code: 'not found',
                },
              });
        }
    }
    static async getById(id: string) : Promise <any> {
        return await User.findById(id);
    }
}