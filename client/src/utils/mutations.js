import gql from "graphql-tag"

export const ADD_ADMIN = gql`
  mutation AddAdmin($email: String!, $password: String!) {
    addAdmin(email: $email, password: $password) {
      token
      admin {
        _id
      }
    }
  }
`

export const LOGIN_ADMIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      admin {
        _id
      }
    }
  }
`

export const ADD_MUSIC = gql`
  mutation AddMusic($title: String!, $link: String!) {
    addMusic(title: $title, link: $link) {
      title
      link
    }
  }
`

export const ADD_MERCH = gql`
  mutation AddMerch($name: String!, $image: String, $type: String!, $quantity: Int!, $price: Float!) {
    addMerch(name: $name, image: $image, type: $type, quantity: $quantity, price: $price) {
      _id
      name
      type
      price
      quantity
      image
    }
  }
`

export const UPDATE_MERCH = gql`
  mutation UpdateMerch($id: ID!, $name: String!, $image: String, $type: String!, $quantity: Int!, $price: Float!) {
    updateMerch(_id: $id, name: $name, image: $image, type: $type, quantity: $quantity, price: $price) {
      _id
      type
      image
      price
      name
      quantity
    }
  }
`

export const ADD_VIDEO = gql`
mutation AddVideo($title: String!, $link: String!) {
  addVideo(title: $title, link: $link) {
    _id
    title
    link
  }
}
`

export const ADD_IMAGE = gql`
mutation AddVideo($title: String!, $link: String!) {
  addVideo(title: $title, link: $link) {
    _id
    title
    link
  }
}
`
