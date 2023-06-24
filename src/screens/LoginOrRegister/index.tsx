import React from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {View, Image} from 'react-native';

import {styles} from './style';
import Button from 'components/Button';
import {loginOrRegisterInfo} from 'utils/auth.utils';
import Item from './Item';

function LoginOrRegister() {
  const {t} = useTranslation();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imgBtnBlock}>
        <Image source={require('assets/images/profile-man.png')} />
        <Button
          btnType="blueBg"
          title={t('auth.login')}
          width="100%"
          height={50}
          marginTop={100}
          onPress={() => navigation.navigate('auth', {isLoginForm: true})}
        />
      </View>
      <View style={styles.infoBlock}>
        {loginOrRegisterInfo.map((item: any) => {
          return <Item key={item.id} {...item} />;
        })}
      </View>
    </View>
  );
}

export default LoginOrRegister;
