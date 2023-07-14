import React from 'react';
import {useRoute} from '@react-navigation/native';

import Main from './Main';
import TrackList from './TrackList';

const AudioBook = () => {
  const route = useRoute();
  const {params} = route;

  return <>{!params?.param ? <Main /> : <TrackList />}</>;
};

export default AudioBook;
