import { gql } from '@apollo/client';

const GET_ALL_POSTS = gql`
  query {
    posts {
      data {
        id
        attributes {
          Title
          Date
          Author
          Excerpt
          Video_URL
          Content
          Cover_image {
            data {
              attributes {
                caption
                alternativeText
                formats
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ALL_MEMBERS = gql`
  query {
    members(sort: "id:asc") {
      data {
        id
        attributes {
          Name
          Position
          Team
          Personal_statement
          Profile_img {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_POSTS, GET_ALL_MEMBERS };
