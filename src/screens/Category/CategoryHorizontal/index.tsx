import React, {useEffect} from 'react';
import {View, BackHandler, Button, Text} from 'react-native';
import CategoryHBooks from 'screens/Category/CategoryHBooks';
import {useGetCategoryQuery} from 'services/category.service';
import {useNavigation} from '@react-navigation/native';

function CategoryHorizontal(props: any) {
  const {paramsRoute, setExParams} = props;
  const navigation = useNavigation();
  const {categoryId, categoryName} = paramsRoute;
  const {data: category, refetch} = useGetCategoryQuery(categoryId);

  useEffect(() => {
    setExParams((prev: any) => {
      return {...prev, hCategory: paramsRoute};
    });
  }, [setExParams, paramsRoute]);

  useEffect(() => {
    const backAction = (e: any) => {
      navigation.navigate('category');
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({
      title: categoryName,
    });
  }, []);

  return (
    <View>
      <CategoryHBooks category={category} />
      {category?.childs?.map((cat: any) => (
        <CategoryHBooks key={cat?.id} category={cat} />
      ))}
    </View>
  );
}

export default CategoryHorizontal;
