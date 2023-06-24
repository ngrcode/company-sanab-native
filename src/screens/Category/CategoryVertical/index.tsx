import React, {useEffect, useState} from 'react';
import {
  View,
  BackHandler,
  ScrollView,
  RefreshControl,
  Text,
} from 'react-native';
import {
  useGetCategoryBooksQuery,
  useGetBoughtsBooksQuery,
} from 'services/category.service';
import BooksVList from 'components/BooksVList';
import Loading from 'components/Loading';
import {useNavigation} from '@react-navigation/native';
import Button from 'components/Button';
import {useDispatch} from 'react-redux';

function CategoryVertical(props: any) {
  const {paramsRoute, exParams, setExParams} = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const {categoryId, categoryName, boughtBooks} = paramsRoute;
  const {data, isLoading, refetch} = useGetCategoryBooksQuery(
    {
      id: categoryId,
      limit: 100,
      page: 1,
    },
    {skip: categoryId ? false : true},
  );

  // const {data: boughtBooksData, refetch: refetchMyBooks} =
  //   useGetBoughtsBooksQuery(
  //     {
  //       id: categoryId,
  //       limit: 100,
  //       page: 1,
  //     },
  //     {skip: boughtBooks ? false : true},
  //   );

  const handleRefreshing = async () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };

  useEffect(() => {
    const backAction = (e: any) => {
      navigation.navigate('category', {
        name: 'hCategory',
        categoryId: categoryId,
        categoryName: categoryName,
      });

      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  useEffect(() => {
    setExParams((prev: any) => {
      return {...prev, vCategory: paramsRoute};
    });
  }, [paramsRoute, setExParams]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefreshing} />
      }>
      <Loading loading={isLoading} />
      <BooksVList books={data?.data} headerTitle={categoryName} />
    </ScrollView>
  );
}
export default CategoryVertical;
