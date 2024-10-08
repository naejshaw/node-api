import { ChordModel } from "../Models/ChordModel"
import * as ChordsRepository from "../Repositories/ChordsRepository"
import * as HttpResponse from "../Utils/HttpHelper"

export const getChordByIdService = async (id:number)=>{
    const data = await ChordsRepository.findChordById(id)
    let response = null
    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }
    return response
}
