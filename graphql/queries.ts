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

const GET_TEAM_COVER_IMG = gql`
  query {
    teamMedia {
      data {
        attributes {
          Cover_img {
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

const GET_JOURNAL_COVER_IMG = gql`
  query {
    journalMedia {
      data {
        attributes {
          Cover_img {
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

export {
  GET_ALL_POSTS,
  GET_ALL_MEMBERS,
  GET_TEAM_COVER_IMG,
  GET_JOURNAL_COVER_IMG,
};
