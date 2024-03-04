import { LighSaber } from "../models/lightSaber.model";
import { LightsaberType } from "../types/LighSaberType";

export class LighSaberService{
    static async createLighSaber(data: LightsaberType) : Promise <any> {
        const lighSaber = new LighSaber({
            name: data.name,
            color: data.color,
            owner: data.owner
        });
        return await lighSaber.save();
    }
    static async getAllLighSaber() : Promise <any> {
        return await LighSaber.find();
    }

}