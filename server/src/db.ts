import mongoose from 'mongoose'
import  'dotenv/config'
import { insertAllUsersAtFirst } from './models/user.model';

function connectToDb() {
    try {
        mongoose.connect(process.env.MONGO_URL as string);

        const db = mongoose.connection;
        db.on('connected', () => {
            console.log(`The database is ready to use`);
            insertAllUsersAtFirst()
        })
        db.on('disconnected', () => console.log(`the database is disconnected`))

    } catch (error) {
        console.log(`Error in the connection`)
    }
}

export default connectToDb