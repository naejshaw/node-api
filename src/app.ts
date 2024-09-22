import express from 'express';
import router from './Routes/Routes';
import cors from 'cors';

function createApp(){

    const app = express()

    app.use(express.json())

    app.use('/api', router)

    const corsOptions = {
        origin: '*',
        methods: ['GET'],
    }

    app.use(cors(corsOptions))

    return app

}

export default createApp