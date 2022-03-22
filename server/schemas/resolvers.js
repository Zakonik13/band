const { signToken } = require("../utils/auth")
const { Admin } = require("../models")
const { Music } = require("../models")
const { Merch } = require("../models")

const resolvers = {
    Query: {
        admins: async () => {
            return Admin.find()
        },
        music: async () => {
            return Music.find()
        },
        merch: async () => {
            return Merch.find()
        }
    },
    Mutation: {
        addAdmin: async (parent, args) => {
            const admin = await Admin.create(args)
            const token = signToken(admin)

            console.log(admin)

            return { token, admin }
        },
        login: async (parent, { email, password }) => {
            const admin = await Admin.findOne({ email })

            if (!admin) {
                throw new AuthenticationError("Incorrect credentials")
            }

            const correctPw = await admin.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials")
            }

            const token = signToken(admin)
            return { token, admin }
        },
        addMusic: async (parent, args) => {
            const music = await Music.create(args)

            return music;
        },
        addMerch: async (parent, args) => {
            const merch = await Merch.create(args)

            return merch;
        }
    }
}

module.exports = resolvers