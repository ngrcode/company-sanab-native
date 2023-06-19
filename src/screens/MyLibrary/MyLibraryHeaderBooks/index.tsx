import React from 'react';
import {View, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {styles} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MyLibraryHeader = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>کتابخانه سناب</Text>
        <Text style={styles.desc}>
          در کتابخانه سناب میتونی اشتراک های مدت دار بخری و در طول اشتراک به
          هزاران کتاب دسترسی داشته باشی !
        </Text>
      </View>
      <View style={styles.IconWrapper}>
        <Icon name="book" style={styles.heartIcon} />
      </View>
    </View>
  );
};

export default MyLibraryHeader;
