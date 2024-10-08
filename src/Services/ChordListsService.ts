import { ChordlistModel } from "../Models/ChordlistModel"
import { SongsChordsModel } from "../Models/SongsChordsModel"
import * as ChordlistsRepository from "../Repositories/ChordlistsRepository"
import * as HttpResponse from "../Utils/HttpHelper"

export const getAllChordlistsService = async ()=>{
    const data = await ChordlistsRepository.findAllChordlists()
    let response = null

    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }
    return response
}

export const getChordlistByIdService = async (id:number)=>{
    const data = await ChordlistsRepository.findChordlistById(id)
    let response = null
    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }
    return response
}

export const createChordlistService = async (Chordlist:ChordlistModel)=> {
    let response = null
    if(Object.keys(Chordlist).length !== 0){
        await ChordlistsRepository.createChordlist(Chordlist)
        response = await HttpResponse.created()
    }else{
        response = await HttpResponse.badRequest()
    }
    return response
}

export const deleteChordlistByIdService = async (id:number)=>{
    let response = null
    const isDeleted = await ChordlistsRepository.deleteChordlistById(id)
    if(isDeleted){
        response = await HttpResponse.ok({message: "deleted"})
    }else{
        response = await HttpResponse.badRequest()
    }
    return response
}

export const updateChordlistByIdService = async (id:number, songsChords: SongsChordsModel)=>{
    const data = await ChordlistsRepository.findAndModifyChordlist(id, songsChords)
    let response = null
    if(Object.keys(data).length === 0){
        response = await HttpResponse.badRequest()
    }else{
        response = await HttpResponse.ok(data)
    }
    return response
}