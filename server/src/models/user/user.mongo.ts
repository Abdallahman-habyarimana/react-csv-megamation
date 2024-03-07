import mongoose from 'mongoose'

export interface UserDto {
    _id?: string;
    name: string;
    school: string;
    email: string;
    password: string;
    role: string;
}

const userSchema = new mongoose.Schema<UserDto>({
    name: {type: String, required: true},
    school: {type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    role: {type: String, required: true},
    
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
