import React, {forwardRef, useEffect, useImperativeHandle} from 'react';
import {ScrollView, Text, View} from 'react-native';
import BooksHList from 'components/BooksHList';
import {useGetCategoryBooksQuery} from 'services/category.service';
import Loading from 'components/Loading';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const CategoryHBooks = (props: any, ref: any) => {
  const {category} = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {data, isLoading, isSuccess, refetch} = useGetCategoryBooksQuery({
    id: category?.id,
  });

  useImperativeHandle(ref, () => ({
    refetch() {
      refetch();
    },
  }));

  return (
    <>
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
    </>
  );
};

export default forwardRef(CategoryHBooks);
