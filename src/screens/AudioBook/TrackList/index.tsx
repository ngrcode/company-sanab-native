import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {backHandlerMethod} from 'utils/common.utils';
import Playlist from 'components/TrackPlayerAudio/PlayList';

const TrackList = () => {
  const navigation = useNavigation();

  useEffect(() => {
    backHandlerMethod(navigation, 'AudioBook');
  }, [navigation]);

  return <Playlist />;
};

export default TrackList;
