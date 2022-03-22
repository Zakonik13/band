const { gql } = require("apollo-server-express")

const typeDefs = gql`
type Query {
    admins: [Admin]
    music: [Music]
    merch: [Merch]
}

type Admin {
    _id: ID!
    email: String!
    password: String!
}

type Music {
    _id: ID!
    title: String!
    source: String!
}

type Merch {
    _id: ID
    name: String!
    descritption: String!
    quantity: Int
    price: Float
}

type Tour {
    _id: ID!
    date: String!
    city: String!
    venue: String!
    link: String
}

type Auth {
    token: ID!
    admin: Admin
}

type Mutation {
    addAdmin(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMusic(title: String!, source: String!): Music
    addMerch(name: String!, description: String!, quantity: Int!, price: Float!): Merch
}
`

// export the typeDefs
module.exports = typeDefs