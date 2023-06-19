import {api} from './api';
import {userUrl} from 'services/urls/profile.urls';

const userApi = api.injectEndpoints({
  endpoints: build => ({
    editUser: build.mutation({
      query: props => {
        const {id, ...body} = props;
        return {
          url: userUrl(id),
          method: 'PUT',
          body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {useEditUserMutation} = userApi;
