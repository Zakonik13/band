const { gql } = require("apollo-server-express")

const typeDefs = gql`
  type Query {
    admins: [Admin]
    music: [Music]
    merch: [Merch]
    tour: [Tour]
    news: [News]
    about: [About]
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

  type About {
    _id: ID!
    body: String!
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
    location: String!
    venue: String!
    link: String
  }

  type News {
    _id: ID!
    date: String!
    title: String!
    body: String!
  }

  type Auth {
    token: ID!
    admin: Admin
  }

  type Mutation {
    addAdmin(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAbout(body: String!): About
    addNews(date: String!, title: String!, body: String!): News
    removeNews(_id: ID!): News
    addMusic(title: String!, source: String!): Music
    addMerch(name: String!, image: String, type: String!, quantity: Int!, price: Float!): Merch
    removeMerch(_id: ID!): Merch
    updateMerch(_id: ID!, name: String!, image: String, type: String!, quantity: Int!, price: Float!): Merch
    updateAbout(_id: ID!, body: String!): About
    addTourDate(date: String!, location: String!, venue: String!, link: String!): Tour
    removeTourDate(_id: ID!): Tour
  }
`

// export the typeDefs
module.exports = typeDefs
