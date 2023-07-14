import React, {useState} from 'react';
import {Text, View, Button, RefreshControl} from 'react-native';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from './style';
import BooksHList from 'components/BooksHList';
import {
  useGetBooksQuery,
  useGetBoughtsBookByUserQuery,
} from 'services/book.service';
import {useSelector} from 'react-redux';

function MyLibraryMyBooks(props: any) {
  const {books} = props;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const clickc = () => {
    refetch();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>کتاب های شما</Text>
      {/* <Button onPress={clickc} title="test" /> */}
      <BooksHList
        title={'کتاب های شما'}
        books={books}
        onPressMore={() =>
          navigation.navigate('category', {
            name: 'vCategory',
            boughtBooks: true,
          })
        }
      />
      {/*<BooksHList
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
export default MyLibraryMyBooks;
