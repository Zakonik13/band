import gql from "graphql-tag";

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
`;

export const GET_TOUR_DATE = gql`
  query Tour {
    tour {
      _id
      date
      location
      venue
      link
    }
  }
`;

export const GET_NEWS = gql`
  query News {
    news {
      _id
      date
      title
      body
    }
  }
`;

export const GET_ABOUT = gql`
  query About {
    about {
      _id
      body
    }
  }
`;

export const GET_IMAGES = gql`
  query Images {
    images {
      _id
      title
      link
    }
  }
`;

export const GET_VIDEOS = gql`
  query Videos {
    videos {
      _id
      title
      link
    }
  }
`;

export const GET_MERCH_BY_ID = gql`
  query MerchById($_id: String!) {
    merchById(_id: $_id) {
      _id
      name
      type
      image
      quantity
      price
    }
  }
`;

export const GET_SUBSCRIPTIONS = gql`
  query Subscription {
    subscription {
      _id
      name
      email
    }
  }
`;
