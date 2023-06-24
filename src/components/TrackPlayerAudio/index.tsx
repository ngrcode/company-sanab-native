import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  SafeAreaView,
  Button,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackPlayer, {
  useProgress,
  Event,
  State,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {setupPlayer, addTracks} from '../../lib/trackPlayerServices';
import {styles} from './style';
import ProgressBar from 'components/TrackPlayerAudio/ProgressBar';
import TrackInfo from 'components/TrackPlayerAudio/Info';

const events = [Event.PlaybackState, Event.PlaybackError];

function TrackPlayerAudio() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const theme = useTheme();
  const {position, buffered} = useProgress();

  const [playerState, setPlayerState] = useState(null);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();
      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks();
      }
      setIsPlayerReady(isSetup);
    }
    setup();
  }, []);

  useTrackPlayerEvents(events, event => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.');
    }
    if (event.type === Event.PlaybackState) {
      setPlayerState(event.state);
    }
  });

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#bbb" />
      </SafeAreaView>
    );
  }
  const isPlaying = playerState === State.Playing;
  return (
    <>
      <ProgressBar />
      {/* <Button onPress={() => TrackPlayer.reset()} title="reset" /> */}
      {/* <TrackInfo /> */}
    </>
  );
}

export default TrackPlayerAudio;
