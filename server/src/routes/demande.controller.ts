import { Request, Response} from 'express'
import demandes from '../models/demande.model'

function getAllRequestedWorks(_req: Request , res: Response) {
    return res.status(200).send(demandes)
}

export {
    getAllRequestedWorks
}