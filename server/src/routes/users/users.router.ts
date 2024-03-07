
import express from 'express'
import { httpAddNewUser, httpGetAllUsers } from './users.controller';

const userRouter = express.Router();

userRouter.get('/auths')
userRouter.get('/users', httpGetAllUsers)
userRouter.post('/users', httpAddNewUser)


export default userRouter