import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {styles} from './style';
import {searchArr} from 'utils/search.utils';
import Icon from 'react-native-vector-icons/AntDesign';

function SearchCategories(props: any) {
  return (
    <View>
      <Text style={styles.hotText}>عبارت های داغ</Text>
      <FlatList
        data={searchArr}
        renderItem={({item}) => (
          <View style={styles.searchBlock}>
            <Icon name="left" style={styles.arrowIcon} />
            <Text style={styles.searchText}>{item.key}</Text>
          </View>
        )}
      />
    </View>
  );
}
export default SearchCategories;
