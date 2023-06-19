import React, {useEffect} from 'react';
import {ScrollView, BackHandler, Text} from 'react-native';
import BooksHList from 'components/BooksHList';
import {useGetCategoryBooksQuery} from 'services/category.service';
import Loading from 'components/Loading';
import {useNavigation} from '@react-navigation/native';

const CategoryHBooks = (props: any) => {
  const {category} = props;
  const navigation = useNavigation();
  const {data, isLoading, isSuccess} = useGetCategoryBooksQuery({
    id: category?.id,
  });

  return (
    <ScrollView>
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
    </ScrollView>
  );
};

export default CategoryHBooks;
