import express from 'express'
import cors from 'cors';
import demandeRouter from './routes/demande.router';
import morgan from 'morgan'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(morgan('combined'));

app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello world')
})
app.use(demandeRouter)

export default app