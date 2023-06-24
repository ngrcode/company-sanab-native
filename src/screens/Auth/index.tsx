import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';

import {styles} from './style';
import {validateSchema} from 'utils/auth.utils';
import Button from 'components/Button';
import PhoneEmailInput from './PhoneEmailInput';
import RecoveryCode from './RecoveryCode';
import {
  useAuthMutation,
  usePostConfirmCodeMutation,
} from 'services/auth.service';
import {submitMethod, resendCodeMethod} from 'methods/auth.methods';
import Loading from 'components/Loading';
import {backHandlerMethod} from 'utils/common.utils';

const Unauthorized = ({navigation, route}: any) => {
  const {t} = useTranslation();
  const {params} = route;
  const {isLoginForm} = params;
  const [isLogin, setIsLogin] = useState(isLoginForm);
  const [phone, setPhone] = useState('');
  const [showRecovery, setShowRecovery] = useState(false);
  const [postAuth, {isLoading: isLoadingAuth}] = useAuthMutation('auth');
  const [postConfirmCode, {isLoading: isLoadingConfirmCode}] =
    usePostConfirmCodeMutation('post');
  const selector = useSelector((state: RootState) => state.common);

  const onSubmitHandler = (values: any, handle: any) => {
    submitMethod(
      values,
      handle,
      isLogin,
      setShowRecovery,
      navigation,
      postAuth,
      postConfirmCode,
    );
  };

  useEffect(() => {
    setIsLogin(isLoginForm);
  }, [isLoginForm]);

  useEffect(() => {
    backHandlerMethod(navigation, 'home');
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={0}
      behavior="height"
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.touchableBlock}>
          <Loading loading={isLoadingAuth || isLoadingConfirmCode} />
          <View style={styles.touchable}>
            <View style={styles.center}>
              <Image
                style={styles.logo}
                source={require('assets/images/avatar.png')}
              />
              <Text style={styles.header}>
                {isLogin ? t('auth.enterAccount') : t('auth.register')}
              </Text>
              <Formik
                validationSchema={() => validateSchema(showRecovery)}
                initialValues={{}}
                onSubmit={onSubmitHandler}>
                {({setFieldValue, handleSubmit, values, errors}: any) => {
                  return (
                    <View style={styles.formik}>
                      {selector?.loginCode?.code?.length ? (
                        <RecoveryCode
                          setFieldValue={setFieldValue}
                          phone={phone}
                          handleResendCode={() =>
                            resendCodeMethod(postAuth, phone)
                          }
                          errors={errors.recoveryCode}
                          setShowRecovery={setShowRecovery}
                        />
                      ) : (
                        <PhoneEmailInput
                          isLogin={isLogin}
                          setIsLogin={setIsLogin}
                          setPhone={setPhone}
                          setFieldValue={setFieldValue}
                          errors={errors.phone}
                        />
                      )}
                      <Button
                        title={isLogin ? t('auth.login') : t('auth.register')}
                        btnType="blueBg"
                        height={50}
                        marginTop={54}
                        onPress={handleSubmit}
                      />
                    </View>
                  );
                }}
              </Formik>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Unauthorized;
