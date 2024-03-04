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
    static async getAllAliensRace() : Promise <any> {
        return await AlienRace.find();
    }
}