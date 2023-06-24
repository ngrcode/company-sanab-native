import {store} from 'stores/store';
import {handleAuth, handleLoginCode} from 'stores/slices/common.slices';

export const confirmCodeMethod = async (
  res: any,
  navigation: any,
  handle: Function,
) => {
  if (res?.data) {
    navigation.navigate('profile');
    const response = res?.data;
    const user = response?.user;
    const accessToken = response?.accessToken;
    const refreshToken = response?.refreshToken;
    await store.dispatch(
      handleAuth({
        token: accessToken,
        refreshToken,
        user,
      }),
    );
    store.dispatch(handleLoginCode({code: '', id: ''}));
  } else {
    handle.setErrors({recoveryCode: res?.error?.data?.error.text});
  }
};

const handleShowRecoveryForm = (
  res: any,
  setShowRecovery: any,
  handle: any,
) => {
  setShowRecovery(true);
  store.dispatch(
    handleLoginCode({code: `${res?.data?.code}`, id: res?.data?.id}),
  );
  handle.setFieldValue('phone');
  handle.setFieldValue('recoveryCode', `${res?.data?.code}`);
};

const authMethod = (
  res: any,
  setShowRecovery: Function,
  handle: Function,
  postAuth: any,
  values: any,
) => {
  if (res?.data?.code) {
    handleShowRecoveryForm(res, setShowRecovery, handle);
  } else {
    const {status} = res?.error;
    if (status === 404) {
      return postAuth({phone: values.phone, isLogin: false}).then(
        (response: any) => {
          authMethod(response, setShowRecovery, handle, postAuth, values);
        },
      );
    }
    handle.setErrors({phone: res?.error?.data?.error.text});
  }
};

export const submitMethod = (
  values: any,
  handle: any,
  isLogin: any,
  setShowRecovery: any,
  navigation: any,
  postAuth: any,
  postConfirmCode: any,
) => {
  if (store.getState().common.loginCode?.code?.length === 0) {
    return postAuth({phone: values.phone, isLogin}).then((res: any) => {
      authMethod(res, setShowRecovery, handle, postAuth, values);
    });
  } else {
    return postConfirmCode(store.getState().common.loginCode).then(
      (res: any) => {
        confirmCodeMethod(res, navigation, handle);
      },
    );
  }
};

export const resendCodeMethod = (postAuth: any, phone: any) => {
  return postAuth({phone, isLogin: true}).then((res: any) => {
    res?.data?.code &&
      store.dispatch(
        handleLoginCode({code: res?.data?.code, id: res?.data?.id}),
      );
  });
};
