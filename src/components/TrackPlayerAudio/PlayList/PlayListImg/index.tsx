import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  State,
} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Octicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import IconOcticons from 'react-native-vector-icons/Octicons';

import {styles} from './style';
import Book3 from 'assets/images/temporary/three.png';

const Playlist = () => {
  return (
    <View style={styles.imgBlock}>
      <Image style={styles.img} source={Book3} />
      <View>
        <View style={styles.textBlock}>
          <IconOcticons name="pencil" style={styles.iconClock} />
          <Text style={styles.text}> وحید یامین پور</Text>
        </View>
        <View style={styles.textBlock}>
          <IconFontAwesome name="microphone-alt" style={styles.iconClock} />
          <Text style={styles.text}>خسرو الهی</Text>
        </View>
        <View style={styles.textBlock}>
          <Icon name="clock" style={styles.iconClock} />
          <Text style={styles.text}>2 ساعت و 30</Text>
        </View>
      </View>
    </View>
  );
};

export default Playlist;
