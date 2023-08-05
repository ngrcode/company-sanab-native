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
    postComment: build.mutation({
      query: (props: any) => {
        const {bookId, values} = props;
        return {
          url: bookCommentsUrl(bookId),
          method: 'POST',
          body: values,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCommentsQuery,
  useGetBookCommentsQuery,
  useGetUserCommentsQuery,
  usePostCommentMutation,
} = commentApi;
