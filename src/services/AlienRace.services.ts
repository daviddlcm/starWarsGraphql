import { AlienRace } from "../models/alienRace.model";
import { AlienRaceType } from "../types/AlienRaceType";

export class AlienRaceService {
    static async createAlienRace(data: AlienRaceType) : Promise <any> {
        const alienRace = new AlienRace({
            name: data.name,
            description: data.description,
            planet: data.planet,
            language: data.language,
            id_user: data.id_user
        });
        console.log(alienRace);
        
        return await alienRace.save();
    }
    static async getAllAliensRace(paginacion:any) : Promise <any> {
        const skip = (paginacion.page - 1) * paginacion.limit
        const alien = await AlienRace.find().skip(skip).limit(paginacion.limit);

        let data: {
            alien: any[],
            total?: number,
            totalPage?: number
        } = {
            alien
        }

        if(paginacion.page && paginacion.limit){
            const totalAlien = await AlienRace.find().countDocuments()
            const totaPage = Math.ceil(totalAlien/paginacion.limit)
            data = {
                ...data,
                total: totalAlien,
                totalPage: totaPage
            }
        }

        return alien

    }
    static async getAliensForPlanet(planet: string) : Promise <any> {
        return await AlienRace.find({planet: planet});
    }
}