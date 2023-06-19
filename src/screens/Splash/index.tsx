import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Image} from 'react-native';
import {styles} from './style';

const Splash = ({navigation}: any) => {
  const {t} = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');
    }, 1500);
  });

  return (
    <View style={styles.container}>
      <Image source={require('assets/images/splash-books.png')} />
      <View>
        <Text style={styles.sanab}>{t('gl.sanab')}</Text>
        <Text style={styles.library}>{t('gl.oneline-library-for-you')}</Text>
      </View>
    </View>
  );
};

export default Splash;
