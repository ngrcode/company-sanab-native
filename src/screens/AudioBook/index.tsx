import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from './style';
import {useTranslation} from 'react-i18next';
import Book1 from 'assets/images/temporary/one.png';
import Book2 from 'assets/images/temporary/two.png';
import Book3 from 'assets/images/temporary/three.png';
import TrackPlayerAudio from 'components/TrackPlayerAudio';
import Icon from 'react-native-vector-icons/Octicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

const AudioBook = () => {
  const {t} = useTranslation();

  return (
    <ScrollView>
      <Image style={styles.img} source={Book3} />
      <View style={styles.block}>
        <Text style={styles.imgTitle}>قسمت اول</Text>
        <Text style={styles.imgNumber}>1/12</Text>
      </View>
      <View style={styles.iconsBlock}>
        <View style={styles.iconBlock}>
          <Icon name="clock" style={styles.iconClock} />
          <Text style={styles.iconText}>دانلود فایل</Text>
        </View>
        <View style={styles.iconBlock}>
          <IconAntDesign name="download" style={styles.iconDownload} />
          <Text style={styles.iconText}>سرعت خواندن</Text>
        </View>
        <View style={styles.iconBlock}>
          <IconEvilIcons name="navicon" style={styles.iconNavicon} />
          <Text style={styles.iconText}>فهرست</Text>
        </View>
      </View>
      <TrackPlayerAudio />
    </ScrollView>
  );
};

export default AudioBook;
