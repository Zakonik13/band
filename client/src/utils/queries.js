import gql from "graphql-tag"

export const GET_MERCH = gql`
query Merch {
    merch {
      _id
      name
      description
      price
      quantity
    }
  }`