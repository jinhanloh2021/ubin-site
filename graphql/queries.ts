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

const GET_ALL_POSTS_PAGINATE = (offset: number, limit: number) => gql`
  query {
    posts(sort: "Date:desc", pagination: { start: ${offset}, limit: ${limit} }) {
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
    posts(sort: "Date:desc", pagination: { start: 0, limit: 999 }) {
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

const GET_HOME_MEDIA = gql`
  query {
    homeMedia {
      data {
        attributes {
          Cover_image {
            data {
              attributes {
                url
              }
            }
          }
          Project_logo {
            data {
              attributes {
                url
              }
            }
          }
          Section_divider {
            data {
              attributes {
                url
              }
            }
          }
          Team_image {
            data {
              attributes {
                url
              }
            }
          }
          Mission_text
        }
      }
    }
  }
`;

const GET_INSTA_COVER_IMG = gql`
  query {
    instaMedia {
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

const GET_LATEST_POST = gql`
  query {
    posts(sort: "Date:desc", pagination: { start: 0, limit: 1 }) {
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

const GET_ALL_INSTA = gql`
  query {
    instaPosts(sort: "Date:desc", pagination: { page: 1, pageSize: 100 }) {
      data {
        attributes {
          PostURL
          CoverImage {
            data {
              attributes {
                url
              }
            }
          }
          Date
        }
      }
    }
  }
`;

const GET_MAP_IMG = gql`
  query {
    mapMedia {
      data {
        attributes {
          Map_img {
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
  GET_ALL_POSTS_PAGINATE,
  GET_ALL_MEMBERS,
  GET_TEAM_COVER_IMG,
  GET_JOURNAL_COVER_IMG,
  GET_POST_BY_TITLE,
  GET_HOME_MEDIA,
  GET_LATEST_POST,
  GET_ALL_INSTA,
  GET_INSTA_COVER_IMG,
  GET_MAP_IMG,
};
