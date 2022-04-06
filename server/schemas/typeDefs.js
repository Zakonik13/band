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
    link: String!
  }

  type Merch {
    _id: ID
    name: String!
    type: String!
    image: String
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
    addMusic(title: String!, link: String!): Music
    addMerch(name: String!, image: String, type: String!, quantity: Int!, price: Float!): Merch
    updateMerch(_id: ID!, name: String!, image: String, type: String!, quantity: Int!, price: Float!): Merch
    addImage(title: String!, link: String!): Image  
    addVideo(title: String!, link: String!): Video
  }
`

// export the typeDefs
module.exports = typeDefs
