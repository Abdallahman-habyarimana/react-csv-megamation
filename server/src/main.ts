import express from 'express'
import cors from 'cors';
import app from './app'

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => console.log('Server started+++'))