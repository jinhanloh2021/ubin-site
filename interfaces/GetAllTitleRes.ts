interface GetAllTitleRes {
  posts: {
    data: Array<{
      attributes: {
        Title: string;
      };
    }>;
  };
}

export default GetAllTitleRes;