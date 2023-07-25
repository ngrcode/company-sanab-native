import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Octicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

import TrackPlayerAudio from 'components/TrackPlayerAudio';
import ControlSpeed from 'screens/AudioBook/Main/ControlSpeed';
import PlayListDownload from 'components/TrackPlayerAudio/PlayList/PlayListDownload';

const Main = (props: any) => {
  const {bookData, handleRefreshing, refreshing} = props;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefreshing} />
      }>
      <Image
        style={styles.img}
        source={{uri: `${process.env.BASE_URL}/files/${bookData.image}`}}
      />
      <View style={styles.block}>
        <Text style={styles.imgTitle}>{bookData.name}</Text>
        <Text style={styles.imgNumber}>1/12</Text>
      </View>
      <View style={styles.iconsBlock}>
        <View style={styles.iconBlock}>
          <Icon name="clock" style={styles.iconClock} />

          <PlayListDownload
            url={`${process.env.BASE_URL}/files/${bookData.files[0].uuid}`}
            title={bookData.files[0].name}
            iconStyles={{display: 'none'}}
            volumeStyles={{display: 'none'}}>
            <Text style={styles.iconText}>دانلود فایل</Text>
          </PlayListDownload>
        </View>
        <ControlSpeed />
        <Pressable
          style={styles.iconBlock}
          onPress={() => navigation.navigate('AudioBook', {param: 'list'})}>
          <IconEvilIcons name="navicon" style={styles.iconNavicon} />
          <Text style={styles.iconText}>فهرست</Text>
        </Pressable>
      </View>
      <TrackPlayerAudio bookData={bookData} />
    </ScrollView>
  );
};

export default Main;
