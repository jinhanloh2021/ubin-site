import { gql } from '@apollo/client';

const GET_ALL_POSTS = gql`
  query {
    posts(sort: "Date:desc") {
      data {
        attributes {
          Title
          Date
          Author
          Excerpt
          Video_URL
          Cover_image {
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

const GET_ALL_POSTS_TITLE = gql`
  query {
    posts(sort: "Date:desc") {
      data {
        attributes {
          Title
        }
      }
    }
  }
`;

const GET_POST_BY_TITLE = (title: string) => gql`
  query {
    posts(
      filters: { Title: { eq: "${title}" } }
    ) {
      data {
        id
        attributes {
          Title
          Author
          Date
          Video_URL
          Cover_image {
            data {
              id
              attributes {
                url
                caption
                alternativeText
              }
            }
          }
          Content
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
  GET_ALL_POSTS_TITLE,
  GET_ALL_MEMBERS,
  GET_TEAM_COVER_IMG,
  GET_JOURNAL_COVER_IMG,
  GET_POST_BY_TITLE,
};
