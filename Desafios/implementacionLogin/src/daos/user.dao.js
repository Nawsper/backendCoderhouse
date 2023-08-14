import { UserModel } from './models/user.models.js'

export default class UserDao {
    async registerUser(user) {
        try {
            const { email } = user
            const existUser = await UserModel.findOne({ email })
            if (!existUser) {
                const newUser = await UserModel.create(user)
                return newUser
            }
            else return false
        } catch (error) {
            console.log(error);
        }
    }

    async loginUser(user) {
        try {
            const { email, password } = user
            const userExist = await UserModel.findOne({ email, password })
            if (userExist) return user
            else return false
        } catch (error) {
            console.log(error);
        }

    }
}