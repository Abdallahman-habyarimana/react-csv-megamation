

import users from "../data"
import UserModel, { UserDto } from "./user.mongo"

async function getAllUsers() {
    return await UserModel.find({})
}

async function checkExistingUser(id: string) {

}

async function addNewUser(user: UserDto) {
    let existingUser = checkExistingUser(user._id)
}

async function insertAllUsersAtFirst() {
    return await UserModel.insertMany(users)
}




export {
    getAllUsers,
    insertAllUsersAtFirst
}

