import React, {useState, useCallback, useRef, createRef} from 'react';
import {ScrollView, Button, RefreshControl} from 'react-native';
import HomeTtile from './HomeTitle';
import {useGetBooksQuery} from 'services/book.service';
import {useGetCategoryBooksQuery} from 'services/category.service';
import BookSuggestion from 'components/BookSuggestion';
import {useDispatch} from 'react-redux';
import {api} from 'services/api';
import Loading from 'components/Loading';
import {catIdsForBooks} from 'utils/home.utils';
import HomeBooksByCategory from 'screens/Home/HomeBooksByCategory';

const Home = () => {
  const dispatch = useDispatch();
  const {
    data: booksList,
    isLoading,
    refetch,
    isSuccess,
    status,
  } = useGetBooksQuery('books');
  const childRef = useRef([]);
  // const {data, refetch: refetchCat} = useGetCategoryBooksQuery(
  //   {id:'a54d678a-ecbf-4896-8b86-5f3872ed7d01'},
  // );

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().then(() => {
      setRefreshing(false);
    });
  }, []);

  const onPressMore = () => {
    // navigation.navigate('category', {
    //   name: 'vCategory',
    //   categoryId: category.id,
    //   categoryName: category.name,
    // });
  };
  const handleRefreshing = async () => {
    // setRefreshing(true);
    // for (let ref of childRef.current) {
    //   await ref.current.refetch();
    // }
    // setRefreshing(false);
    dispatch(api.util.resetApiState());
  };

  childRef.current = catIdsForBooks.map(
    (element, i) => childRef.current[i] ?? createRef(),
  );

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefreshing} />
      }>
      {/* <Button onPress={handleRefreshing} title="test" /> */}
      {/* <Loading loading={isLoading} /> */}
      <HomeTtile />
      {catIdsForBooks.map((item: any, index: number) => (
        <HomeBooksByCategory
          catId={item.id}
          title={item.title}
          refreshMyData={handleRefreshing}
          // ref={childRef}
          // ref={(arr: any) => (arr[index] = arr)}
          ref={childRef.current[index]}
          key={item.id}
        />
      ))}
      <BookSuggestion marginBottom={24} />
    </ScrollView>
  );
};

export default Home;
