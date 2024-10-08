import { Router } from 'express'
import * as PlayersController from '../Controllers/PlayersController'
import * as TeamsController from '../Controllers/TeamsController'
import * as ChordsController from '../Controllers/ChordsController'
import * as PlaylistsController from '../Controllers/PlaylistsController'
import * as ChordfyController from '../Controllers/ChordfyController'

const router = Router()

router.get('/players', PlayersController.getListPlayers)
router.get('/players/:id', PlayersController.getPlayerById)
router.post('/players', PlayersController.createPlayer)
router.patch('/players/:id', PlayersController.updatePlayerById)
router.delete('/players/:id', PlayersController.deletePlayerById)

router.get('/teams', TeamsController.getListTeams)
router.get('/teams/:id', TeamsController.getTeamById)
router.post('/teams', TeamsController.createTeam)
router.delete('/teams/:id', TeamsController.deleteTeamById)

router.get('/cifraclub/:id', ChordsController.getChordById)

router.get('/spotify/playlist', PlaylistsController.getAllPlaylists)
router.get('/spotify/playlist/:id', PlaylistsController.getPlaylistById)

router.get('/chordfy/playlists', ChordfyController.getAllChordLists)
router.post('/chordfy/playlists', ChordfyController.createChordList)
router.get('/chordfy/playlists/:id', ChordfyController.getChordListById)
router.patch('/chordfy/playlists/:id', ChordfyController.updateChordListById)
router.delete('/chordfy/playlists/:id', ChordfyController.deleteChordListById)

export default router