import { PlaylistModel } from "../Models/PlaylistModel"
import * as PlaylistsRepository from "../Repositories/PlaylistsRepository"
import * as HttpResponse from "../Utils/HttpHelper"

export const getAllPlaylistsService = async ()=>{
    const data = await PlaylistsRepository.findAllPlaylists()
    let response = null

    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }
    return response
}

export const getPlaylistByIdService = async (id:number)=>{
    const data = await PlaylistsRepository.findPlaylistById(id)
    let response = null
    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }
    return response
}
