import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import {ScrollView, BackHandler, Text, View} from 'react-native';
import BooksHList from 'components/BooksHList';
import {useGetCategoryBooksQuery} from 'services/category.service';
import Loading from 'components/Loading';
import {useNavigation} from '@react-navigation/native';

const CategoryHBooks = (props: any, ref: any) => {
  const {category} = props;
  const navigation = useNavigation();
  const {data, isLoading, isSuccess, refetch} = useGetCategoryBooksQuery({
    id: category?.id,
  });

  useImperativeHandle(ref, () => ({
    refetch() {
      refetch();
    },
  }));

  return (
    <View>
      <Loading loading={isLoading} />
      {isSuccess && (
        <BooksHList
          title={category?.name}
          onPressMore={() =>
            navigation.navigate('category', {
              name: 'vCategory',
              categoryId: category.id,
              categoryName: category.name,
            })
          }
          books={data?.data}
        />
      )}
    </View>
  );
};

export default forwardRef(CategoryHBooks);
