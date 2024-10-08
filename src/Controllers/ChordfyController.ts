import { Request, Response } from 'express'
import * as ChordListsService from '../Services/ChordListsService'
import { SongsChordsModel } from '../Models/SongsChordsModel'

export const getAllChordLists = async (req: Request, res: Response) =>{
    const httpResponse = await ChordListsService.getAllChordListsService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getChordListById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await ChordListsService.getChordListByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const createChordList = async (req: Request, res: Response) =>{
    const bodyValue = req.body
    const httpResponse = await ChordListsService.createChordListService(bodyValue)
    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const updateChordListById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const bodyValue: SongsChordsModel = req.body
    const httpResponse = await ChordListsService.updateChordListByIdService(id, bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const deleteChordListById = async (req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await ChordListsService.deleteChordListByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}