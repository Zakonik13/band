const { signToken } = require("../utils/auth")
const { Admin } = require("../models")

const resolvers = {
    Query: {
        admins: async () => {
            return Admin.find()
        },
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
    }
}

module.exports = resolvers