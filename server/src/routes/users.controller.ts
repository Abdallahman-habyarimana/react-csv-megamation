import { Request, Response} from 'express'
import { addNewUser, getAllUsers } from '../models/user.model'


async function httpGetAllUsers(_req: Request , res: Response) {
    return res.status(200).json(await getAllUsers())
}

async function httpAddNewUser(req: Request , res: Response) {
    return res.status(201).send(await addNewUser(req.body))
}





export {
    httpGetAllUsers,
    httpAddNewUser
}