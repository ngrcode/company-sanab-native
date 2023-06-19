import {api} from './api';
import {registerUrl, loginUrl} from 'services/urls/auth.urls';

const authApi = api.injectEndpoints({
  endpoints: build => ({
    getRoles: build.query({
      query: () => '/roles',
    }),
    postConfirmCode: build.mutation({
      query: props => {
        const {id, ...body} = props;
        const body1 = {confirmCode: `${body.code}`, skipCaptcha: true};
        return {
          url: `/auth/${id}`,
          method: 'POST',
          body: body1,
        };
      },
    }),
    auth: build.mutation({
      query: body => {
        const {phone, isLogin} = body;
        const customBody = {phone, skipCaptcha: true};
        return {
          url: isLogin ? loginUrl : registerUrl,
          method: 'POST',
          body: customBody,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {useGetRolesQuery, useAuthMutation, usePostConfirmCodeMutation} =
  authApi;
