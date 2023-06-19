import React from 'react';
import {Text, ScrollView, Pressable} from 'react-native';
import {styles} from './style';
import {useGetCategoriesQuery} from 'services/category.service';
import Loading from 'components/Loading';
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

function CategoryRows() {
  const {data, isLoading} = useGetCategoriesQuery('categories');
  const navigation = useNavigation();

  const handlePress = (cat: string) => {
    navigation.navigate('category', {
      name: 'hCategory',
      categoryId: cat.id,
      categoryName: cat.name,
    });
  };

  return (
    <ScrollView>
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
