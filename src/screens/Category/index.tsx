import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {View} from 'react-native';
import CategoryRows from 'screens/Category/CategoryRows';
import Author from 'screens/Category/Author';
import PublisherBooks from 'screens/Category/PublisherBooks';
import CategoryHorizontal from 'screens/Category/CategoryHorizontal';
import CategoryVertical from 'screens/Category/CategoryVertical';

function Category({navigation}: any) {
  const route = useRoute();
  const [exParams, setExParams] = useState('');

  const renderRoutes = (routeName: string) => {
    switch (routeName) {
      case 'author':
        return <Author paramsRoute={route.params} exParams={exParams} />;
      case 'publisher':
        return (
          <PublisherBooks paramsRoute={route.params} exParams={exParams} />
        );
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

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      navigation.setParams({categoryId: '', name: ''});
      setExParams('');
    });
    return unsubscribe;
  }, [navigation]);

  return <View>{renderRoutes(route?.params?.name)}</View>;
}
export default Category;