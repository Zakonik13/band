import gql from "graphql-tag"

export const ADD_ADMIN = gql`
mutation AddAdmin($email: String!, $password: String!) {
    addAdmin(email: $email, password: $password) {
      token
      admin{
        _id
      }
    }
  }`

export const LOGIN_ADMIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      admin{
        _id
      }
    }
  }
  `

export const ADD_MUSIC = gql`
    mutation AddMusic($title: String!, $source: String!) {
    addMusic(title: $title, source: $source) {
      title
      source
    }
  }
  `

export const ADD_MERCH = gql`
    mutation AddMerch($name: String!, $description: String!, $quantity: Int!, $price: Float!) {
    addMerch(name: $name, description: $description, quantity: $quantity, price: $price) {
      _id
      name 
      description
      price
      quantity
    }
  }`

export const UPDATE_MERCH = gql`
    mutation UpdateMerch($id: ID!, $name: String!, $description: String!, $quantity: Int!, $price: Float!) {
    updateMerch(_id: $id, name: $name, description: $description, quantity: $quantity, price: $price) {
      _id
      description
      price
      name
    }
  }`