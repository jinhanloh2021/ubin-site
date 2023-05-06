interface GetAllTitleRes {
  posts: {
    data: Array<{
      attributes: {
        Title: string;
      };
    }>;
  };
}
