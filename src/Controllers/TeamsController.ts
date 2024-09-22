import { Request, Response } from 'express'
import * as TeamsService from '../Services/TeamsService'

export const getListTeams = async (req: Request, res: Response) =>{
    const httpResponse = await TeamsService.getListTeamsService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getTeamById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await TeamsService.getTeamByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const createTeam = async (req: Request, res: Response) =>{
    const bodyValue = req.body
    const httpResponse = await TeamsService.createTeamService(bodyValue)
    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const deleteTeamById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await TeamsService.deleteTeamByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}