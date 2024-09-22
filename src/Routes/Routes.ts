import { Router } from 'express'
import { getPlayerById } from '../Controllers/PlayersController'

const router = Router()

// router.get('/players/list', getListPlayers)
router.get('/players/:id', getPlayerById)
// router.post('/players', createPlayer)
// router.patch('/players/:id', updatePlayerById)
// router.delete('/players/:id', deletePlayerById)

export default router