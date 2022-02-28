const { gql } = require("apollo-server-express")

const typeDefs = gql`
type Query {
    admins: [Admin]
}

type Admin {
    _id: ID!
    email: String!
    password: String!
}

type Auth {
    token: ID!
    admin: Admin
}

type Mutation {
    addAdmin(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
}
`

// export the typeDefs
module.exports = typeDefs