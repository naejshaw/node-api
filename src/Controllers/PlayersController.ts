import { Request, Response } from 'express'
import { getPlayerService } from '../Services/PlayersService'

export const getPlayerById = async (req: Request, res: Response) =>{
    const httpResponse = await getPlayerService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}