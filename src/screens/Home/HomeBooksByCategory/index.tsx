import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {ScrollView, Button, RefreshControl} from 'react-native';
import HomeTtile from './HomeTitle';
import BooksHList from 'components/BooksHList';
import {useGetCategoryBooksQuery} from 'services/category.service';
import BookSuggestion from 'components/BookSuggestion';
import {useDispatch} from 'react-redux';
import {api} from 'services/api';
import Loading from 'components/Loading';
import {useNavigation} from '@react-navigation/native';

const HomeBooksByCategory = forwardRef((params: any, ref: any) => {
  const {catId, title} = params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const {
    data: booksByCategory,
    refetch: refetchCat,
    isFetching,
    requestId,
    currentData,
    originalArgs,
    startedTimeStamp,
  } = useGetCategoryBooksQuery({id: catId});

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().then(() => {
      setRefreshing(false);
    });
  }, []);

  useImperativeHandle(ref, () => ({
    refetch() {
      refetchCat();
    },
  }));

  const onPressMore = () => {
    // navigation.navigate('category', {
    //   name: 'vCategory',
    //   categoryId: category.id,
    //   categoryName: category.name,
    // });
  };

  const clickc = () => {
    refetchCat();
  };
  return (
    <BooksHList
      // title="پرفروش ترین کتاب های متنی"
      title={title}
      isFetching={isFetching}
      books={booksByCategory?.data}
      // onPressMore={() => console.info('more')}
      onPressMore={() =>
        navigation.navigate('category', {
          name: 'vCategory',
          categoryId: catId,
          categoryName: title,
        })
      }
    />
  );
});

export default HomeBooksByCategory;
