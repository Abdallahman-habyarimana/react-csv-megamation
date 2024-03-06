
import express from 'express'
import { httpGetAllUsers } from './users.controller';

const userRouter = express.Router();

userRouter.get('/auths')
userRouter.get('/users', httpGetAllUsers)


export default userRouter