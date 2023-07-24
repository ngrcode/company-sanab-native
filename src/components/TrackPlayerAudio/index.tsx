import React, {useEffect, useState} from 'react';
import {SafeAreaView, ActivityIndicator, View, Text} from 'react-native';
import TrackPlayer, {
  useProgress,
  State,
  usePlaybackState,
} from 'react-native-track-player';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

import {setupPlayer, addTracks} from 'lib/trackPlayerServices';
import {styles} from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {formatDuration} from 'utils/common.utils';

const TrackPlayerAudio = (props: any) => {
  const {bookData} = props;
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const playerState = usePlaybackState();
  const progress = useProgress(200);
  const {position, duration} = progress;
  const route = useRoute();
  const {params} = route;
  const navigation = useNavigation();

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();
      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks({
          src: `${process.env.BASE_URL}/files/${bookData.files[0].uuid}`,
          name: bookData.files[0].name,
          duration: formatDuration(duration),
        });
      }
      setIsPlayerReady(isSetup);
    }
    setup();
  }, [params, duration]);

  useEffect(() => {
    navigation.addListener('blur', () => {
      TrackPlayer.reset();
    });
  }, [navigation]);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#bbb" />
      </SafeAreaView>
    );
  }

  const isPlaying = playerState === State.Playing;

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default TrackPlayerAudio;
