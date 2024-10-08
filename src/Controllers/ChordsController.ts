import { Request, Response } from 'express'
import * as ChordsService from '../Services/ChordsService'

export const getChordById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await ChordsService.getChordByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)

}
