import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {View, BackHandler} from 'react-native';

import CategoryRows from 'screens/Category/CategoryRows';
import CategoryHorizontal from 'screens/Category/CategoryHorizontal';
import CategoryVertical from 'screens/Category/CategoryVertical';

function Category({navigation}: any) {
  const route = useRoute();
  const paramsRoute = route.params;
  const categoryName = paramsRoute?.categoryName;
  const categoryId = paramsRoute?.categoryId;
  const routeName = paramsRoute?.name;
  const [exParams, setExParams] = useState('');

  const renderRoutes = (routeName: string) => {
    switch (routeName) {
      case 'hCategory':
        return (
          <CategoryHorizontal
            paramsRoute={route.params}
            setExParams={setExParams}
          />
        );
      case 'vCategory':
        return (
          <CategoryVertical
            paramsRoute={route.params}
            exParams={exParams}
            setExParams={setExParams}
          />
        );
      default:
        return <CategoryRows />;
    }
  };

  /**
   *  backhandler
   */
  useEffect(() => {
    const backAction = () => {
      switch (route?.params?.name) {
        case 'hCategory':
          navigation.navigate('category');
          break;
        case 'vCategory':
          navigation.navigate('category', {
            name: 'hCategory',
            categoryId: categoryId,
            categoryName: categoryName,
          });
          break;
        default:
          navigation.goBack();
          setExParams('');
          break;
      }

      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation, categoryId, categoryName, routeName]);

  return <View>{renderRoutes(route?.params?.name)}</View>;
}

export default Category;
