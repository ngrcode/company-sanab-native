import React from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from './style';
import Button from 'components/Button';
import Icon from 'react-native-vector-icons/Fontisto';
import {loginOrRegisterInfo} from 'utils/auth.utils';

function LoginOrRegister() {
  const {t} = useTranslation();
  const navigation = useNavigation();

  function Item(props: any) {
    const {title, desc, id, navigateTo} = props;

    return (
      <Pressable
        key={id}
        style={id === 2 ? styles.item : [styles.item, styles.borderBtm]}
        onPress={() => navigation.navigate(navigateTo)}>
        <View style={styles.descWrapper}>
          <Icon name="angle-left" style={styles.icon} />
          <Text style={styles.desc}>{desc}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgBtnBlock}>
        <Image source={require('assets/images/profile-man.png')} />
        <Button
          btnType="blueBg"
          title={t('auth.login')}
          width="100%"
          height={50}
          marginTop={59}
          onPress={() => navigation.navigate('auth', {isLoginForm: true})}
        />
        <Button
          btnType="blueBorder"
          title={t('auth.register')}
          width="100%"
          height={50}
          marginTop={12}
          onPress={() => navigation.navigate('auth', {isLoginForm: false})}
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
