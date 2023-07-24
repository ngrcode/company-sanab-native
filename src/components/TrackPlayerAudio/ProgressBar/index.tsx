import React, {useState} from 'react';
import {Text, View} from 'react-native';
import TrackPlayer, {
  useProgress,
  useTrackPlayerEvents,
  Event,
  State,
} from 'react-native-track-player';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

import {styles} from './style';
import {formatDuration} from 'utils/common.utils';

const events = [Event.PlaybackState, Event.PlaybackError];

function ProgressBar() {
  const {position, duration} = useProgress(200);
  const [playerState, setPlayerState] = useState(null);

  useTrackPlayerEvents(events, event => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.');
    }
    if (event.type === Event.PlaybackState) {
      setPlayerState(event.state);
    }
  });

  const isPlaying = playerState === State.Playing;

  return (
    <>
      <Slider
        style={{width: '100%', height: 40, marginTop: 58}}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor="#16BAC5"
        thumbTintColor="#16BAC5"
        maximumTrackTintColor="#DDDDDD"
        lowerLimit={0}
        onValueChange={e => TrackPlayer.seekTo(e)}
        value={position}
      />
      <View style={styles.sliderTimeBlock}>
        <Text style={styles.duration}>{formatDuration(duration)}</Text>
      </View>
      <View style={styles.iconsBlock}>
        <Icon
          name="skip-previous"
          style={{fontSize: 30}}
          onPress={() => TrackPlayer.skipToPrevious()}
        />
        {isPlaying ? (
          <IconAntDesign
            name="pausecircleo"
            style={{fontSize: 30}}
            onPress={() => TrackPlayer.pause()}
          />
        ) : (
          <View style={styles.iconPlayBlock}>
            <IconEvilIcons
              name="play"
              style={styles.iconPlay}
              onPress={() => TrackPlayer.play()}
            />
          </View>
        )}
        <Icon
          name="skip-next"
          style={{fontSize: 30}}
          onPress={() => TrackPlayer.skipToNext()}
        />
      </View>
    </>
  );
}

export default ProgressBar;
