import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from 'stores/store';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {logout} from 'stores/slices/common.slices';
import {store} from 'stores/store';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BASE_URL,
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as RootState).common.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithCamelize: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions = {}) => {
  const result: any = await baseQuery(args, api, extraOptions);
  const status = result?.meta?.response?.status;
  switch (status) {
    case 403:
      break;
    case 401:
      store.dispatch(logout(''));
      break;
    case 404:
      break;
    case 400:
      break;
    case 500:
      break;
    default:
      break;
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithCamelize,
  endpoints: () => ({}),
});
