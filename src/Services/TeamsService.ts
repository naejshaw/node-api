import { TeamModel } from "../Models/TeamModel"
import * as TeamsRepository from "../Repositories/TeamsRepository"
import * as HttpResponse from "../Utils/HttpHelper"


export const getListTeamsService = async ()=>{
    const data = await TeamsRepository.findAllTeams()
    let response = null

    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }
    return response
}

export const getTeamByIdService = async (id:number)=>{
    const data = await TeamsRepository.findTeamById(id)
    let response = null
    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }
    return response
}

export const createTeamService = async (Team:TeamModel)=> {
    let response = null
    if(Object.keys(Team).length !== 0){
        await TeamsRepository.createTeam(Team)
        response = await HttpResponse.created()
    }else{
        response = await HttpResponse.badRequest()
    }
    return response
}

export const deleteTeamByIdService = async (id:number)=>{
    let response = null
    const isDeleted = await TeamsRepository.deleteTeamById(id)
    if(isDeleted){
        response = await HttpResponse.ok({message: "deleted"})
    }else{
        response = await HttpResponse.badRequest()
    }
    return response
}