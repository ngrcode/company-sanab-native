import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

import {backHandlerMethod} from 'utils/common.utils';
import Playlist from 'components/TrackPlayerAudio/PlayList';
import TrackPlayerAudio from 'components/TrackPlayerAudio';

const TrackList = (props: any) => {
  const {bookData, handleRefreshing, refreshing} = props;
  const navigation = useNavigation();

  useEffect(() => {
    backHandlerMethod(navigation, 'AudioBook');
  }, [navigation]);

  return (
    <>
      <Playlist
        bookData={bookData}
        handleRefreshing={handleRefreshing}
        refreshing={refreshing}
      />
      <View
        style={{
          marginTop: 'auto',
        }}>
        <TrackPlayerAudio bookData={bookData} />
      </View>
    </>
  );
};

export default TrackList;
