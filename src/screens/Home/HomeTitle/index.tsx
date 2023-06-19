import React from 'react';
import {View, Text, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './style';

const HomeTitle = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Image
        source={require('assets/images/home/home-book.png')}
        style={styles.headerImage}
      />
      <View style={styles.grayBg}>
        <View>
          <Text style={styles.text}>{t('gl.sanabShort')}</Text>
          <Text style={styles.text}>{t('gl.onlineLibrary')}</Text>
          <Text style={styles.text}>{t('gl.alwaysWithYou')}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeTitle;
