

import users from "../data"
import UserModel, { UserDto } from "./user.mongo"

async function getAllUsers() {
    return await UserModel.find({})
}

async function addNewUser(user: UserDto) {

        const newUser = new UserModel({
            name: user.name,
            school: user.school,
            role: user.role
        })
        
        await newUser.save()
        return newUser
        
    

}

// async function insertAllUsersAtFirst() {
//     return await UserModel.insertMany(users)
// }




export {
    getAllUsers,
    addNewUser
}

