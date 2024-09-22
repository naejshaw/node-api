import { Router } from 'express'
import * as PlayersController from '../Controllers/PlayersController'

const router = Router()

router.get('/players', PlayersController.getListPlayers)
router.get('/players/:id', PlayersController.getPlayerById)
router.post('/players', PlayersController.createPlayer)
router.patch('/players/:id', PlayersController.updatePlayerById)
router.delete('/players/:id', PlayersController.deletePlayerById)

export default router