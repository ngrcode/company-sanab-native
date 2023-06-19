import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './style';
import Loading from 'screens/Search/SearchLoading';
import {Shadow} from 'react-native-shadow-2';

function SearchBookList(props: any) {
  const {data, isFetching, isLoading} = props;

  return (
    <View style={styles.container}>
      <Loading loading={isFetching || isLoading} />
      {data?.data?.map((item: any) => (
        <View key={item.id} style={styles.block}>
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
      ))}
    </View>
  );
}
export default SearchBookList;
