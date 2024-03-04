import { PlanetType } from "../types/PlanetType";
import { Planet } from "../models/Planet.model";

export class PlanetService{
    static async createPlanet(planet:PlanetType) : Promise<any>{
        return await Planet.create(planet)
    }
    static async deletePlanet(id:string) : Promise<any>{
        return await Planet.findByIdAndDelete(id)
    }
    static async getPlanetForGalaxy(galaxy:any) : Promise<any>{
        const skip = (galaxy.page - 1) * galaxy.limit
        const planeta = await Planet.find({galaxy:galaxy.galaxy}).skip(skip).limit(galaxy.limit)

        let data: {
            planeta: any[],
            total?: number,
            totalPage?: number
        } = {
            planeta
        }

        if(galaxy.page && galaxy.limit){
            const totalPlanet = await Planet.find({galaxy:galaxy.galaxy}).countDocuments()
            const totaPage = Math.ceil(totalPlanet/galaxy.limit)
            data = {
                ...data,
                total: totalPlanet,
                totalPage: totaPage
            }
        }

        return planeta;

    }
}