import React from 'react';
import {View, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const MylibraryHeaderOffline = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>مطالعه آفلاین کتاب</Text>
        <Text style={styles.desc}>
          در کتابخانه سناب میتونی آخرین کتاب هایی که امانت گرفتی رو به صورت
          آفلاین هم مطالعه کنی !
        </Text>
      </View>
      <View style={styles.IconWrapper}>
        <Icon name="cloud-offline-outline" style={styles.heartIcon} />
      </View>
    </View>
  );
};

export default MylibraryHeaderOffline;
``;
