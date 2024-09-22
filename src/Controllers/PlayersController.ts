import { Request, Response } from 'express'
import { getPlayerService } from '../Services/PlayersService'
import { ok } from '../Utils/HttpHelper'

export const getPlayerById = async (req: Request, res: Response) =>{
    const responseService = await getPlayerService()

    const response = await ok(responseService)

    res.status(response.statusCode).json(response.body)
}