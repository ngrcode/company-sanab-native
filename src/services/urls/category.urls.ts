export const categoriesUrl = '/categories';

export const categoryBooksUrl = (params: any) => {
  const {id, limit, page} = params;
  let url = limit
    ? `/categories/${id}/books?page=${page}&limit=${limit}`
    : `/categories/${id}/books`;
  return url;
};

export const categoryUrl = (id: string) => `/categories/${id}`;
