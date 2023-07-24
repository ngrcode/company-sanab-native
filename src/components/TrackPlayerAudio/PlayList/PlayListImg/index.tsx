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
  useProgress,
} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Octicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import IconOcticons from 'react-native-vector-icons/Octicons';

import {styles} from './style';
import Book3 from 'assets/images/temporary/three.png';
import {formatDuration} from 'utils/common.utils';

const Playlist = (props: any) => {
  const {bookData} = props;
  const {duration} = useProgress(200);

  return (
    <View style={styles.imgBlock}>
      <Image
        style={styles.img}
        source={{uri: `${process.env.BASE_URL}/files/${bookData.image}`}}
      />
      <View>
        <View style={styles.textBlock}>
          <IconOcticons name="pencil" style={styles.iconClock} />
          <Text style={styles.text}>
            {bookData?.authors?.author?.list
              .map((narrator: any) => narrator.firstName)
              .toString()}
          </Text>
        </View>
        <View style={styles.textBlock}>
          <IconFontAwesome name="microphone-alt" style={styles.iconClock} />
          <Text style={styles.text}>
            {bookData?.authors?.narrator?.list
              .map((narrator: any) => narrator.firstName)
              .toString()}
          </Text>
        </View>
        <View style={styles.textBlock}>
          <Icon name="clock" style={styles.iconClock} />
          <Text style={styles.text}>{formatDuration(duration)}</Text>
        </View>
      </View>
    </View>
  );
};

export default Playlist;
