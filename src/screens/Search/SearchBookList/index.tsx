import React from 'react';
import {Text, View, Image, Pressable, FlatList} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {useNavigation} from '@react-navigation/native';

import Loading from 'screens/Search/SearchLoading';
import {styles} from './style';

function SearchBookList(props: any) {
  const {data, isFetching, isLoading} = props;
  const navigation = useNavigation();

  const handleClickBook = (bookId: any) => {
    navigation.navigate('Book', {bookId});
  };

  const renderItem = (props: any) => {
    const {item} = props;

    return (
      <Pressable onPress={() => handleClickBook(item.id)} key={item.id}>
        <View style={styles.block}>
          <Text style={styles.text}>{item.name}</Text>
          <View style={styles.imgWrapper}>
            <Shadow distance={8}>
              <Image
                source={{
                  uri: `${process.env.BASE_URL}/files/${item?.image}`,
                }}
                style={styles.image}
              />
            </Shadow>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Loading loading={isFetching || isLoading} />
      <FlatList
        data={data?.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
export default SearchBookList;
