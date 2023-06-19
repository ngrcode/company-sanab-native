import {store} from 'stores/store';
import {handleProfile} from 'stores/slices/common.slices';

export const editUserMethod = (
  values: any,
  setErrors: any,
  userId: any,
  editUser: any,
  input: any,
  setModalVisible: any,
) => {
  editUser({...values, id: userId}).then((res: any) => {
    if (res.error) {
      setErrors({email: res.error?.data?.error?.text});
    } else {
      input === 'password' || store.dispatch(handleProfile(values));
      setModalVisible(false);
    }
  });
};
