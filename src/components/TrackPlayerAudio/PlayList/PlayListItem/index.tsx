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
  Event,
  State,
} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Octicons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';

import {styles} from './style';

const PlayListItem = ({index, title, isCurrent}: any) => {
  const {colors} = useTheme();

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
            <Text style={styles.time}>08:43</Text>
            <Icon name="clock" style={styles.iconClock} />
          </View>
        </View>
      </View>
      <View style={styles.downloadBlock}>
        <Text style={styles.volume}>11/4 MB</Text>
        <IconIonicons name="download-outline" style={styles.downloadIcon} />
      </View>
    </TouchableOpacity>
  );
};

export default PlayListItem;
