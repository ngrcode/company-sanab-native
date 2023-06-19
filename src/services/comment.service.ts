import {api} from './api';
import {
  bookCommentsUrl,
  commentsUrl,
  userCommentsUrl,
} from 'services/urls/comments.url';

const commentApi = api.injectEndpoints({
  endpoints: build => ({
    getComments: build.query({
      query: () => commentsUrl,
    }),
    getBookComments: build.query({
      query: (id: any) => bookCommentsUrl(id),
    }),
    getUserComments: build.query({
      query: (id: any) => {
        return userCommentsUrl(id);
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCommentsQuery,
  useGetBookCommentsQuery,
  useGetUserCommentsQuery,
} = commentApi;
