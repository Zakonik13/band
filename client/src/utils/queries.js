import gql from "graphql-tag"

export const GET_MERCH = gql`
  query Merch {
    merch {
      _id
      name
      type
      image
      price
      quantity
    }
  }
`
export const GET_IMAGES = gql`
query Images {
  images {
    _id
    title
    link
  }
}
`

export const GET_VIDEOS = gql`
query Videos {
  videos {
    _id
    title
    link
  }
}
`