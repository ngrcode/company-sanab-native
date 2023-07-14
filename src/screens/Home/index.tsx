import React, {useState, useRef, createRef} from 'react';
import {ScrollView, Button, RefreshControl} from 'react-native';

import HomeTtile from './HomeTitle';
import BookSuggestion from 'components/BookSuggestion';
import {useDispatch} from 'react-redux';
import {api} from 'services/api';
import {catIdsForBooks} from 'utils/home.utils';
import HomeBooksByCategory from 'screens/Home/HomeBooksByCategory';
import {persistor} from 'stores/store';
import {reset} from 'stores/slices/common.slices';
import {useGetCategoriesQuery} from 'services/category.service';

const Home = () => {
  const dispatch = useDispatch();
  const childRef = useRef([]);
  const [refreshing, setRefreshing] = useState(false);
  const {data: catList} = useGetCategoriesQuery('categories');

  const handleRefreshing = async () => {
    setRefreshing(true);
    for (let ref of childRef.current) {
      await ref.current.refetch();
    }
    setRefreshing(false);
    // dispatch(api.util.resetApiState());
  };

  const removePersistorCommon = () => {
    // dispatch(reset());
    dispatch(api.util.resetApiState());
  };

  if (catList) {
    childRef.current = catList
      .slice(0, 5)
      .map((element, i) => childRef.current[i] ?? createRef());
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefreshing} />
      }>
      {/* <Button onPress={removePersistorCommon} title="test" /> */}
      <HomeTtile />
      {catList &&
        catList.length > 0 &&
        catList
          .slice(0, 5)
          .map((item: any, index: number) => (
            <HomeBooksByCategory
              catId={item.id}
              title={item.name}
              refreshMyData={handleRefreshing}
              ref={childRef.current[index]}
              key={item.id}
            />
          ))}
      <BookSuggestion marginBottom={24} />
    </ScrollView>
  );
};

export default Home;
