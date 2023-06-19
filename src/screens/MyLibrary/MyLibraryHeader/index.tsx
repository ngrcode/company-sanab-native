import React from 'react';
import {View, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {styles} from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyLibraryHeader = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>اشتراک هدیه برای دیگران</Text>
        <Text style={styles.desc}>
          در کتابخانه سناب میتونی به عنوان هدیه واسه دیگران اشتراک بخری و
          دعوتشون کی به کتابخوانی :)
        </Text>
      </View>
      <View style={styles.IconWrapper}>
        <Icon name="heart-box-outline" style={styles.heartIcon} />
      </View>
    </View>
  );
};

export default MyLibraryHeader;
