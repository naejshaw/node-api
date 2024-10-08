import { Request, Response } from 'express'
import * as PlaylistsService from '../Services/PlaylistsService'

export const getAllPlaylists = async (req: Request, res: Response) =>{
    const httpResponse = await PlaylistsService.getAllPlaylistsService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlaylistById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await PlaylistsService.getPlaylistByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)

}