import "dotenv/config";
import { UserType } from "../types/UserType";
import { User } from "../models/mongodb.model";
import bcrypt from "bcrypt";
const saltos = parseInt(process.env.SALTOS || "0");
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
}