import {store} from 'stores/store';
import {handleAuth, handleLoginCode} from 'stores/slices/common.slices';

export const confirmCodeMethod = (
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
    store.dispatch(
      handleAuth({
        token: accessToken,
        refreshToken,
        user,
      }),
    );
  } else {
    handle.setErrors({recoveryCode: res?.error?.data?.error.text});
  }
};

const authMethod = (res: any, setShowRecovery: Function, handle: Function) => {
  if (res?.data?.code) {
    setShowRecovery(true);
    store.dispatch(
      handleLoginCode({code: `${res?.data?.code}`, id: res?.data?.id}),
    );
    handle.setFieldValue('phone');
    handle.setFieldValue('recoveryCode', `${res?.data?.code}`);
  } else {
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
      authMethod(
        res,
        setShowRecovery,
        store.getState().common.loginCode?.id,
        handle,
      );
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
