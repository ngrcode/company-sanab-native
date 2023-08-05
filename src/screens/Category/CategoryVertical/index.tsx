import React, {useEffect, useState} from 'react';
import {ScrollView, RefreshControl} from 'react-native';
import {
  useGetCategoryBooksQuery,
  useGetBoughtsBooksQuery,
} from 'services/category.service';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';

import Loading from 'components/Loading';
import BooksVList from 'components/BooksVList';

function CategoryVertical(props: any) {
  const {paramsRoute, exParams, setExParams} = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
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
    setExParams((prev: any) => {
      return {...prev, vCategory: paramsRoute};
    });
  }, [paramsRoute, setExParams]);

  return (
    <ScrollView
      style={{marginTop: 20}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefreshing} />
      }>
      <Loading loading={isLoading} />
      <BooksVList
        books={boughtBooks || data?.data}
        headerTitle={categoryName}
      />
    </ScrollView>
  );
}
export default CategoryVertical;
