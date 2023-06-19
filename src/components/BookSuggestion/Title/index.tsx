import React from 'react';
import {View, Text, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './style';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Title = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{t('home.suggestionForYou')}</Text>
      </View>
    </View>
  );
};

export default Title;
