import React, {useEffect, useState, useRef} from 'react';
import {ScrollView, RefreshControl} from 'react-native';
import CategoryHBooks from 'screens/Category/CategoryHBooks';
import {useGetCategoryQuery} from 'services/category.service';
import {useNavigation} from '@react-navigation/native';

function CategoryHorizontal(props: any) {
  const {paramsRoute, setExParams} = props;
  const navigation = useNavigation();
  const {categoryId, categoryName} = paramsRoute;
  const {data: category, refetch} = useGetCategoryQuery(categoryId);
  const [refreshing, setRefreshing] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setExParams((prev: any) => {
      return {...prev, hCategory: paramsRoute};
    });
  }, [setExParams, paramsRoute]);

  useEffect(() => {
    navigation.setOptions({
      title: categoryName,
    });
  }, []);

  const handleRefreshing = () => {
    ref?.current?.refetch();
    refetch();
  };

  return (
    <ScrollView
      style={{marginTop: 20}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefreshing} />
      }>
      <CategoryHBooks category={category} ref={ref} />
      {category?.childs?.map((cat: any) => (
        <CategoryHBooks key={cat?.id} category={cat} />
      ))}
    </ScrollView>
  );
}

export default CategoryHorizontal;
