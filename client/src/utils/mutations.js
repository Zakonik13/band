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

  export const ADD_MUSIC = gql`mutation AddMusic($title: String!, $source: String!) {
    addMusic(title: $title, source: $source) {
      title
      source
    }
  }
  `