import React from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './style';
import Button from 'components/Button';
import Input from 'components/Input';

const PhoneEmailInput = ({
  isLogin,
  setFieldValue,
  setIsLogin,
  setPhone,
  errors,
}: any) => {
  const {t} = useTranslation();

  const handleChangeInput = (e: any) => {
    setFieldValue('phone', e);
    setPhone(e);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{t('auth.enterEmailOrPhone')}</Text>
      <View style={styles.inputButton}>
        <Input
          placeholder={t('auth.emailOrPhone')}
          onChangeText={handleChangeInput}
          defaultValue=""
        />
        <Text style={styles.errors}>{errors}</Text>
      </View>
      <View style={styles.noAccount}>
        <Button
          btnType="default"
          width={50}
          onPress={() => (isLogin ? setIsLogin(false) : setIsLogin(true))}
          title={isLogin ? t('auth.register') : t('auth.login')}
        />
        <Text>{isLogin ? t('auth.noAccount') : t('auth.hasAccount')}</Text>
      </View>
    </View>
  );
};

export default PhoneEmailInput;
