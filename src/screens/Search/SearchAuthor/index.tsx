import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {styles} from './style';
import {searchArr} from 'utils/search.utils';
import Icon from 'react-native-vector-icons/AntDesign';

function SearchAuthor(props: any) {
  const {data} = props;
  return (
    <FlatList
      data={data.data}
      renderItem={({item}) => (
        <View style={styles.searchBlock}>
          <Text style={styles.searchText}>{item.name}</Text>
          <Icon name="user" style={styles.icon} />
        </View>
      )}
    />
  );
}
export default SearchAuthor;
