import { Request, Response } from 'express'
import * as PlayersService from '../Services/PlayersService'
import { StatisticsModel } from '../Models/StatisticsModel'

export const getListPlayers = async (req: Request, res: Response) =>{
    const httpResponse = await PlayersService.getListPlayersService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await PlayersService.getPlayerByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const createPlayer = async (req: Request, res: Response) =>{
    const bodyValue = req.body
    const httpResponse = await PlayersService.createPlayerService(bodyValue)
    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const updatePlayerById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const bodyValue: StatisticsModel = req.body
    const httpResponse = await PlayersService.updatePlayerByIdService(id, bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const deletePlayerById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await PlayersService.deletePlayerByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}