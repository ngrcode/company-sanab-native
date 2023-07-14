import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  State,
} from 'react-native-track-player';

import PlayListImg from './PlayListImg';
import {styles} from './style';
import PlayListItem from './PlayListItem';
import PlayListMiddle from 'components/TrackPlayerAudio/PlayList/PlayListMiddle';

const Playlist = () => {
  const [queue, setQueue] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);

  async function loadPlaylist() {
    const queue = await TrackPlayer.getQueue();
    setQueue(queue);
  }

  useEffect(() => {
    loadPlaylist();
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.state == State.nextTrack) {
      let index = await TrackPlayer.getCurrentTrack();
      setCurrentTrack(index);
    }
  });

  return (
    <View style={styles.container}>
      <PlayListImg />
      <PlayListMiddle />
      <View style={styles.playlist}>
        <FlatList
          data={queue}
          renderItem={({item, index}) => (
            <PlayListItem
              index={index}
              title={item.title}
              isCurrent={currentTrack == index}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Playlist;
