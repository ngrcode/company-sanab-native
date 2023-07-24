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

const Playlist = (props: any) => {
  const {bookData, refreshing, handleRefreshing} = props;
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
      <PlayListImg bookData={bookData} />
      <PlayListMiddle bookData={bookData} />
      <View style={styles.playlist}>
        <FlatList
          data={queue}
          onRefresh={handleRefreshing}
          refreshing={refreshing}
          renderItem={({item, index}) => (
            <PlayListItem
              index={index}
              title={item.title}
              url={item.url}
              isCurrent={currentTrack == index}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Playlist;
