import { PlayerModel } from "../Models/PlayerModel"
import { StatisticsModel } from "../Models/StatisticsModel"
import * as PlayersRepository from "../Repositories/PlayersRepository"
import * as HttpResponse from "../Utils/HttpHelper"


export const getListPlayersService = async ()=>{
    const data = await PlayersRepository.findAllPlayers()
    let response = null

    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }
    return response
}

export const getPlayerByIdService = async (id:number)=>{
    const data = await PlayersRepository.findPlayerById(id)
    let response = null
    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }
    return response
}

export const createPlayerService = async (player:PlayerModel)=> {
    let response = null
    if(Object.keys(player).length !== 0){
        await PlayersRepository.createPlayer(player)
        response = await HttpResponse.created()
    }else{
        response = await HttpResponse.badRequest()
    }
    return response
}

export const deletePlayerByIdService = async (id:number)=>{
    let response = null
    const isDeleted = await PlayersRepository.deletePlayerById(id)
    if(isDeleted){
        response = await HttpResponse.ok({message: "deleted"})
    }else{
        response = await HttpResponse.badRequest()
    }
    return response
}

export const updatePlayerByIdService = async (id:number, statistics: StatisticsModel)=>{
    const data = await PlayersRepository.findAndModifyPlayer(id, statistics)
    let response = null
    if(Object.keys(data).length === 0){
        response = await HttpResponse.badRequest()
    }else{
        response = await HttpResponse.ok(data)
    }
    return response
}