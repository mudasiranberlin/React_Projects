import { Client, Account, ID } from "appwrite"
import conf from "../conf/conf"

export class AuthService {
    client = new Client()
    account

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.approjectId)

        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email,
                password,
                name
            })

            if (userAccount) {
                return this.login({ email, password })
            }

            return userAccount

        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession({
                email,
                password
            })
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
    try {
        return await this.account.get()
    } catch (error) {
        if (error.code === 401) {
            return null
        }

        console.error("Appwrite error:", error)
        return null
    }
}
}

const authService = new AuthService()

export default authService