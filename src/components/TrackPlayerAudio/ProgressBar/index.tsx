import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import TrackPlayer, {
  useProgress,
  useTrackPlayerEvents,
  Event,
  State,
} from 'react-native-track-player';
import {styles, stylesFunc} from './style';
import TrackInfo from 'components/TrackPlayerAudio/Info';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

const events = [Event.PlaybackState, Event.PlaybackError];

function ProgressBar() {
  const {position, duration, buffered} = useProgress(200);
  const [playerState, setPlayerState] = useState(null);

  function format(seconds: any) {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  console.log(position, duration, buffered);
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
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="red"
        maximumTrackTintColor="blue"
        lowerLimit={5}
        upperLimit={30}
        minimumValue={10}
        onValueChange={() => console.log('yeeeeeeeeeeeeee')}
      />
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
      <View style={styles.bar}>
        <View
        // style={stylesFunc(`${(position / duration) * 100}`).playerPosition}
        />
        <View
        // style={stylesFunc(`${(position / duration) * 100}`).fullBar}
        />
      </View>
      {/* <Text style={styles.trackProgress}>
        {format(position)} / {format(duration)}
      </Text>
      <Text> {isPlaying ? 'playing' : 'not playing'}</Text> */}
    </>
  );
}

export default ProgressBar;
