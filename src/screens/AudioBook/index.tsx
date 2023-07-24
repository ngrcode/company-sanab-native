import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';

import Main from './Main';
import TrackList from './TrackList';
import {useGetBookQuery} from 'services/book.service';

const AudioBook = () => {
  const route = useRoute();
  const {params} = route;
  const [refreshing, setRefreshing] = useState(false);
  const {data: bookData, refetch: getBookData} = useGetBookQuery(params?.id);

  const handleRefreshing = async () => {
    setRefreshing(true);
    await getBookData();
    setRefreshing(false);
  };

  return (
    <>
      {!params?.param ? (
        <Main
          bookData={bookData}
          handleRefreshing={handleRefreshing}
          refreshing={refreshing}
        />
      ) : (
        <TrackList
          bookData={bookData}
          handleRefreshing={handleRefreshing}
          refreshing={refreshing}
        />
      )}
    </>
  );
};

export default AudioBook;
