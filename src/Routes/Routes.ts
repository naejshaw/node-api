import { Router } from 'express'
import * as PlayersController from '../Controllers/PlayersController'
import * as TeamsController from '../Controllers/TeamsController'

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

export default router