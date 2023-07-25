import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import TrackPlayer, {
  useTrackPlayerEvents,
  useProgress,
  Capability,
  Event,
  State,
} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Octicons';
import {useTheme} from '@react-navigation/native';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import {styles} from './style';
import PlayListDownload from 'components/TrackPlayerAudio/PlayList/PlayListDownload';
import {formatDuration} from 'utils/common.utils';

const PlayListItem = ({index, title, isCurrent, url}: any) => {
  const {colors} = useTheme();
  const {duration} = useProgress(200);

  function handleItemPress() {
    TrackPlayer.skip(index);
  }

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...{backgroundColor: isCurrent ? colors.blue[1] : 'transparent'},
      }}
      onPress={handleItemPress}>
      <View style={styles.IndexTitleBlock}>
        <Text>{index + 1}</Text>
        <View style={styles.titleBlock}>
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.iconClockBlock}>
            <Text style={styles.time}>{formatDuration(duration)}</Text>
            <Icon name="clock" style={styles.iconClock} />
          </View>
        </View>
      </View>
      <PlayListDownload url={url} title={title}>
        <IconIonicons name="download-outline" style={styles.downloadIcon} />
      </PlayListDownload>
    </TouchableOpacity>
  );
};

export default PlayListItem;
