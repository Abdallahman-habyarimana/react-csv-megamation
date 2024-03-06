import { Request, Response} from 'express'
import { getAllUsers } from '../models/user.model'


async function httpGetAllUsers(_req: Request , res: Response) {
    return res.status(200).json(await getAllUsers())
}





export {
    httpGetAllUsers
}