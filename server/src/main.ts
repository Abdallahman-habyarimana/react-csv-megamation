import express from 'express'
import cors from 'cors';
import app from './app';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectToDb from './db';

const PORT = process.env.PORT || 8000

dotenv.config()


async function startServer() {
    app.listen(PORT, () => console.log('Server started+++'))
    await connectToDb()
}

startServer()



