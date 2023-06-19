import {api} from './api';
import {
  categoriesUrl,
  categoryBooksUrl,
  categoryUrl,
} from 'services/urls/category.urls';
import {
  booksUrl,
  bookUrl,
  publisherBooksUrl,
  authorBooksUrl,
} from '../services/urls/book.urls';

const categoryApi = api.injectEndpoints({
  endpoints: build => ({
    getCategories: build.query({
      query: () => categoriesUrl,
    }),
    getCategoryBooks: build.query({
      query: (params: any) => {
        return {url: categoryBooksUrl(params)};
      },
    }),
    getCategory: build.query({
      query: (id: string) => {
        return categoryUrl(id);
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCategoriesQuery,
  useGetCategoryBooksQuery,
  useGetCategoryQuery,
} = categoryApi;
