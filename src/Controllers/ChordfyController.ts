import { Request, Response } from 'express'
import * as ChordListsService from '../Services/ChordListsService'
import { SongsChordsModel } from '../Models/SongsChordsModel'

export const getAllChordLists = async (req: Request, res: Response) =>{
    const httpResponse = await ChordListsService.getAllChordlistsService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getChordListById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await ChordListsService.getChordlistByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const createChordList = async (req: Request, res: Response) =>{
    const bodyValue = req.body
    const httpResponse = await ChordListsService.createChordlistService(bodyValue)
    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const updateChordListById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const bodyValue: SongsChordsModel = req.body
    const httpResponse = await ChordListsService.updateChordlistByIdService(id, bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const deleteChordListById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await ChordListsService.deleteChordlistByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}