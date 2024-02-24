import { Request, Response} from 'express'

function getAllRequestedWorks(req: Request , res: Response) {
    return res.status(200).json([{
        name: 'abdallah'
    }])
}

export {
    getAllRequestedWorks
}