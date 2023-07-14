import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './style';
import {useRoute, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Octicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

import Book3 from 'assets/images/temporary/three.png';
import TrackPlayerAudio from 'components/TrackPlayerAudio';

const Main = (props: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute();
  const {params} = route;

  return (
    <>
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
        <Pressable
          style={styles.iconBlock}
          onPress={() => navigation.navigate('AudioBook', {param: 'list'})}>
          <IconEvilIcons name="navicon" style={styles.iconNavicon} />
          <Text style={styles.iconText}>فهرست</Text>
        </Pressable>
      </View>
      <TrackPlayerAudio />
    </>
  );
};

export default Main;
