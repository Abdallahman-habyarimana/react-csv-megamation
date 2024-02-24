import express from 'express'
import cors from 'cors';
import demandeRouter from './routes/demande.router';

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())
app.use(demandeRouter)

export default app