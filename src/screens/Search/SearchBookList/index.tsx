import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from './style';
import Loading from 'screens/Search/SearchLoading';
import {Shadow} from 'react-native-shadow-2';
import {handleModalBook} from 'stores/slices/common.slices';
import {useDispatch} from 'react-redux';

function SearchBookList(props: any) {
  const {data, isFetching, isLoading} = props;
  const dispatch = useDispatch();

  const handleClickBook = (bookId: any) => {
    dispatch(handleModalBook({show: true, bookId}));
  };

  return (
    <View style={styles.container}>
      <Loading loading={isFetching || isLoading} />
      {data?.data?.map((item: any) => (
        <Pressable onPress={() => handleClickBook(item.id)} key={item.id}>
          <View style={styles.block}>
            <Text style={styles.text}>{item.name}</Text>
            <View style={styles.imgWrapper}>
              <Shadow distance={8}>
                <Image
                  source={require('assets/images/home/home-book.png')}
                  style={styles.image}
                />
              </Shadow>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
}
export default SearchBookList;
