import React, {useState} from 'react';
import {Text, ScrollView, Pressable, RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';

import {styles} from './style';
import {useGetCategoriesQuery} from 'services/category.service';
import Loading from 'components/Loading';

function CategoryRows() {
  const {data, isLoading, refetch} = useGetCategoriesQuery('categories');
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const handlePress = (cat: string) => {
    navigation.navigate('category', {
      name: 'hCategory',
      categoryId: cat.id,
      categoryName: cat.name,
    });
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => refetch()} />
      }>
      <Loading loading={isLoading} />
      {data?.map((item: any) => {
        return (
          <Pressable
            onPress={() => handlePress(item)}
            key={item.id}
            style={styles.item}>
            <Text>{item.name}</Text>
            <Icon name="angle-left" />
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
export default CategoryRows;
