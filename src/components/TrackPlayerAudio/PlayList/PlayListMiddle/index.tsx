import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';

function PlayListMiddle() {
  return (
    <View style={styles.container}>
      <View style={styles.flexBlock}>
        <IconFeather name="headphones" style={styles.headPhoneIcon} />
        <Text style={styles.duration}>1 ساعت و 40 دقیقه باقی مانده</Text>
      </View>
      <View style={styles.flexBlock}>
        <IconIonicons name="download-outline" style={styles.downloadIcon} />
        <Text style={styles.downloadAll}>دانلود همه</Text>
        <Text style={styles.volume}>150/4 MB</Text>
      </View>
    </View>
  );
}
export default PlayListMiddle;
