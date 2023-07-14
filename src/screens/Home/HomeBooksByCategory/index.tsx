import React, {
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {ScrollView, Button, RefreshControl, View} from 'react-native';
import HomeTtile from './HomeTitle';
import BooksHList from 'components/BooksHList';
import {useGetCategoryBooksQuery} from 'services/category.service';
import BookSuggestion from 'components/BookSuggestion';
import {api} from 'services/api';
import Loading from 'components/Loading';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const HomeBooksByCategory = forwardRef((params: any, ref: any) => {
  const {catId, title} = params;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {
    data: booksByCategory,
    refetch: refetchCat,
    isFetching,
    isLoading,
  } = useGetCategoryBooksQuery({id: catId});

  useImperativeHandle(ref, () => ({
    refetch() {
      refetchCat();
    },
  }));

  return (
    <>
      <BooksHList
        title={title}
        isFetching={isFetching}
        books={booksByCategory?.data}
        onPressMore={() =>
          navigation.navigate('category', {
            name: 'vCategory',
            categoryId: catId,
            categoryName: title,
          })
        }
      />
      {/* <View style={{marginTop: 200}}>
        <Button title="refetch cat" onPress={() => refetchCat()} />
      </View> */}
    </>
  );
});

export default HomeBooksByCategory;
