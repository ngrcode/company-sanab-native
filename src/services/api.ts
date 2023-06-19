import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from 'stores/store';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sanab.farzinahmadi.com/api/',
    // baseUrl: process.env.BASE_URL,
    // baseUrl: 'http://185.128.137.193/api/',
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).common.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build: any) => ({}),
});
