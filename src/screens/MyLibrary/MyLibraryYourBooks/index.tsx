import React, {useState} from 'react';
import {Text, View, Button, RefreshControl} from 'react-native';
import {styles} from './style';
import BooksHList from 'components/BooksHList';
import {
  useGetBooksQuery,
  useGetBoughtsBookByUserQuery,
} from 'services/book.service';
import {useSelector} from 'react-redux';

function MyLibraryYourBooks() {
  const {data, refetch} = useGetBooksQuery('books');

  const clickc = () => {
    refetch();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>کتاب های شما</Text>
      <Button onPress={clickc} title="test" />

      {/* <BooksHList
        title={'کتاب های الکترونیک شما'}
        books={data?.data}
        onPressMore={() => console.info('more')}
      />
      <BooksHList
        title={'کتاب های الکترونیک شما'}
        books={data?.data}
        onPressMore={() => console.info('more')}
      />
      <BooksHList
        title={'کتاب های الکترونیک شما'}
        books={data.data}
        onPressMore={() => console.info('more')}
      />
      <BooksHList
        title={'کتاب های الکترونیک شما'}
        books={data.data}
        onPressMore={() => console.info('more')}
      /> */}
    </View>
  );
}
export default MyLibraryYourBooks;
