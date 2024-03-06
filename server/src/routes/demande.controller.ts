import { Request, Response} from 'express'
import { addNewRequest, getAllRequestedWorks, getRequestedWork } from '../models/demande.model'
import { DemandeDto } from '../models/demande.mongo'

async function httpGetAllRequestedWorks(_req: Request , res: Response) {
    return res.status(200).json(await getAllRequestedWorks())
}

async function httpAddNewRequest(req: Request, res: Response) {
    return res.status(201).send(await addNewRequest(req.body))
}

async function httpGetRequestedWork(req:Request, res: Response) {
    return res.status(200).send(await getRequestedWork(req.params.id))
}



export {
    httpGetAllRequestedWorks,
    httpGetRequestedWork,
    httpAddNewRequest
}