import { PlanetType } from "../types/PlanetType";
import { Planet } from "../models/Planet.model";

export class PlanetService{
    static async createPlanet(planet:PlanetType) : Promise<any>{
        return await Planet.create(planet)
    }
    static async deletePlanet(id:string) : Promise<any>{
        return await Planet.findByIdAndDelete(id)
    }
}