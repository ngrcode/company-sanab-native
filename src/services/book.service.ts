import {api} from './api';
import {
  booksUrl,
  bookUrl,
  publisherBooksUrl,
  authorBooksUrl,
  searchBooksUrl,
  buyBookUrl,
  boughtBooksByUserUrl,
  addBookToLibraryUrl,
  boughtBooksUrl,
} from 'services/urls/book.urls';

const bookApi = api.injectEndpoints({
  endpoints: build => ({
    getBooks: build.query({
      query: () => booksUrl,
    }),
    getBoughtsBookByUser: build.query({
      query: (id: any) => {
        return {url: boughtBooksByUserUrl(id), method: 'Get'};
      },
    }),
    getBoughtsBooks: build.query({
      query: (id: any) => {
        return {url: boughtBooksUrl(), method: 'Get'};
      },
    }),
    getBook: build.query({
      query: (id: any) => {
        return {url: bookUrl(id), method: 'Get'};
      },
    }),
    getPublisherBooks: build.query({
      query: (id: any) => publisherBooksUrl(id),
    }),
    getAuthorBooks: build.query({
      query: (id: any) => authorBooksUrl(id),
    }),
    getSearchBooks: build.query({
      query: (params: any) => {
        return {
          url: searchBooksUrl,
          method: 'GET',
          params,
        };
      },
    }),
    postBuyBook: build.mutation({
      query: (data: any) => {
        const {body, id} = data;
        const formData = new FormData();
        formData.append('token', body.token);
        formData.append('from', body.from);
        return {
          url: buyBookUrl(id),
          method: 'POST',
          body: formData,
        };
      },
    }),
    postAddBookToLibrary: build.mutation({
      query: (props: any) => {
        const {id} = props;
        return {
          url: addBookToLibraryUrl(id),
          method: 'POST',
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useGetPublisherBooksQuery,
  useGetAuthorBooksQuery,
  useGetBoughtsBookByUserQuery,
  useGetBoughtsBooksQuery,
  useGetSearchBooksQuery,
  usePostBuyBookMutation,
  usePostAddBookToLibraryMutation,
} = bookApi;
